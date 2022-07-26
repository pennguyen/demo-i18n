import mongoose from 'mongoose';

const SubsidizeSchema = new mongoose.Schema({
  name: {
    vn: {
      type: String,
    },
    jp: {
      type: String,
    },
  },
  type: {
    type: String,
    enum: ['fixed-amount', 'salary-percentage'],
    default: 'fixed-amount',
  },
  value: {
    type: Number,
  },
  note: {
    vn: {
      type: String,
    },
    jp: {
      type: String,
    },
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createBy: {
    type: String,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  updateBy: {
    type: String,
  },
});

export default mongoose.models.Subsidize || mongoose.model('Subsidize', SubsidizeSchema);
