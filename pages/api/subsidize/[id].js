import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import * as SubsidizeBranch from '@logics/Subsidize';

export default withApiAuthRequired(async (req, res) => {

  if (req.method === 'GET') {
    const branch = await SubsidizeBranch.getDetailById(req.query.id);

    return res.status(200).json(branch);
  }
  /**
   * Update item by id
   */
  if (req.method === 'PUT') {
    const updateData = req.body;

    // update status
    if (req.query.updateStatus) {
      const result = await SubsidizeBranch.updateStatusById(req.query.id, updateData.status);

      return res.status(200).json(result);
    }

    const result = await SubsidizeBranch.updateById(req.query.id, updateData);

    return res.status(200).json(result);
  }
  // Lỗi không xác định
  return res.status(404).json({ success: false });
});
