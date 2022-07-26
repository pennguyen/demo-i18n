import dbConnect from '../utils/dbConnect';
import ModelSubsidize from '../models/Subsidize';




const getQuery = (val) => {
 // default query
 if (!val)
   return {
     query: {},
     limit: 9999,
     skip: 0,
   };

 const { skip, limit, status } = val;

 const query = {};

 // Filter theo status
 if (status) {
   query.status = { $in: status.split(',') };
 }

 return {
   skip: parseInt(skip, 10) || 0,
   limit: parseInt(limit, 10) || 9999,
   query,
 };
};

const getList = async (query) => {
  await dbConnect();

  const validQuery = getQuery(query);
  const key = query.keyword ? query.keyword.trim() : '';

  const result = await ModelSubsidize.find({...validQuery.query, $or: [
      { "name.vn": {$regex: `.*${key}.*`, $options: 'i'} },
      { "name.jp": {$regex: `.*${key}.*`, $options: 'i'} },
    ]})
    .sort({ createAt: -1 })
    .limit(validQuery.limit)
    .skip(validQuery.skip);

  return result;
};

const findById = async (id) => {
  try {
    await dbConnect();

    const result = await ModelSubsidize.findById(id);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async (insertData) => {
  await dbConnect();

  const result = await ModelSubsidize.create({
    ...insertData,
    createAt: Date.now(),
  });

  return { success: true, result };
};

/// -------------------------------- End Public Functions --------------------------------///

export { getList, findById, create };
