import { NextApiResponse, NextApiRequest } from 'next'
import * as LogicSubsidize from '../../../logics/Subsidize';

export default async function handler(
  _req,
  res
) {
  const list = await LogicSubsidize.getList(_req.query);
  return res.status(200).json(list);
}
