import { z } from 'zod';

// 会员纳新表单校验。手机号按品牌业务范围（中国大陆）校验。
export const membershipSchema = z.object({
  name: z.string().trim().min(1, '请输入姓名'),
  phone: z
    .string()
    .trim()
    .min(1, '请输入手机号')
    .regex(/^1[3-9]\d{9}$/, '请输入有效的手机号'),
  city: z.string().trim().optional(),
  email: z
    .union([z.literal(''), z.string().trim().email('请输入有效的邮箱')])
    .optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: '请先阅读并同意《会员章程》及隐私政策',
  }),
});

export type MembershipInput = z.infer<typeof membershipSchema>;
