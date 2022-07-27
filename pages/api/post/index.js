import * as LogicSubsidize from '../../../logics/Subsidize';

export default async function subsidizeApi(req, res){
  if (req.method === 'GET') {
    // get data by id
    if (req.query.findById) {
      const item = await LogicSubsidize.findById(req.query.id);
      return res.status(200).json(item);
    }

    // get list data
    const list = await LogicSubsidize.getList(req.query);
    return res.status(200).json(list);
  }

  /**
   * Thêm mới
   */
  if (req.method === 'POST') {
    const insertData = req.body;
    const result = await LogicSubsidize.create(insertData);

    return res.status(200).json(result);
  }

  // Lỗi không xác định
  return res.status(404).json({ success: false });
};