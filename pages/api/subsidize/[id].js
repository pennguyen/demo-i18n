import * as SubsidizeBranch from '../../../logics/Subsidize';

export default async function subsidizeDetail(req, res){

  if (req.method === 'GET') {
    const branch = await SubsidizeBranch.findById(req.query.id);

    return res.status(200).json(branch);
  }
  // Lỗi không xác định
  return res.status(404).json({ success: false });
};
