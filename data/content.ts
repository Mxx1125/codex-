// 已确认的页面文案与演示数据。
// 门店地址、营业时间、真实媒体链接与会员规则以品牌方确认为准，未确认处均明确标注。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const img = (path: string) => `${basePath}${path}`;

export type NavItem = { path: string; label: string };

export type Look = { id: string; caption: string; image?: string };
export type Series = { title: string; tagline: string; looks: Look[] };
export type ArchiveItem = { name: string; note: string };

export type Milestone = {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type HeritagePillar = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: 'preview' | 'gathering' | 'birthday' | 'points';
};

export type Store = { name: string; address: string; hours: string };
export type City = { name: string; stores: Store[] };
export type Province = { name: string; cities: City[] };

export type Social = {
  name: string;
  href: string;
  icon: 'wechat' | 'weibo' | 'xiaohongshu' | 'instagram';
};

export const site = {
  name: 'EXCEPTION 例外',
  nameEn: 'EXCEPTION',
  nameZh: '例外',
  founded: '1996年创立于广州',
  tagline: '传袭再造 · 东方哲学式当代生活艺术',
  description: '中国原创设计品牌',
  statement: '一个以东方极简美学为底色、以人文温度为核心的高端生活美学品牌。',
  highlights: [
    '1996 年创立于广州',
    '中国原创设计品牌',
    '传袭再造 · 东方哲学式当代生活艺术',
    '非遗工艺 × 当代设计',
  ],
  email: 'contact@example-brand.com',
  copyright: '© 1996-2026 EXCEPTION de MIXMIND',
  footerNote: '生而例外，致当代东方生活',
};

export const navigation: NavItem[] = [
  { path: '/', label: '首页' },
  { path: '/collection', label: '新品' },
  { path: '/milestones', label: '品牌纪事' },
  { path: '/heritage', label: '生而例外' },
  { path: '/membership', label: '会员' },
  { path: '/boutiques', label: '门店' },
];

export const hero = {
  videoSrc: '',
  poster: img('/images/hero.jpg'),
  posterMobile: img('/images/hero-mobile.jpg'),
  nameEn: 'EXCEPTION',
  nameZh: '例外',
  tagline: '传袭再造 · 东方哲学式当代生活艺术',
  subtitle: '1996年创立于广州 · 中国原创设计品牌',
};

export const brandIntro = {
  title: '关于例外',
  sentence1: '例外（EXCEPTION de MIXMIND）1996 年创立于广州，是中国原创设计品牌。',
  sentence2: '品牌以人本设计与精良工艺为底色，将东方美学融入当代生活，于日常之间，成生活之艺术。',
};

export const collection = {
  title: '当季新系',
  subtitle: 'CURRENT COLLECTION',
  intro: '自传统而来，落于日常之间。当季衣装以纹样、织造与剪裁，书写东方美学在当下的留白。',
  video: {
    src: '',
    poster: img('/images/collection-video.jpg'),
    caption: '当季形象大片 · 系列概念影像（资料待接入）',
  },
  series: [
    {
      title: '人文浪漫',
      tagline: '刺绣针脚的温度、文博纹样的雅致，赋予服装以情意与诗意。',
      looks: [
        { id: 'LOOK 01', caption: '苎麻质地，手工刺绣细密如织。', image: img('/images/look-renwen-1.jpg') },
        { id: 'LOOK 02', caption: '文博纹样的雅致，于衣间书写含蓄情意。', image: img('/images/look-renwen-2.jpg') },
        { id: 'LOOK 03', caption: '刺绣针法错落有致，色泽温润如绢帛。', image: img('/images/look-renwen-3.jpg') },
        { id: 'LOOK 04', caption: '传统刺绣针脚的温度，赋予衣装以诗性。', image: img('/images/look-renwen-4.jpg') },
        { id: 'LOOK 05', caption: '文博图样与现代剪裁的对话。', image: img('/images/look-renwen-5.jpg') },
        { id: 'LOOK 06', caption: '图片待补充' },
      ],
    },
    {
      title: '自然生活',
      tagline: '天然材质的呼吸感、草木染色的质朴，将自然意境融入日常穿着。',
      looks: [
        { id: 'LOOK 01', caption: '棉麻混纺，手工草木染成，色泽取自植物本真。', image: img('/images/look-ziran-1.jpg') },
        { id: 'LOOK 02', caption: '天然麻质，传统织造纹理细腻，留有一抹自然晕染。', image: img('/images/look-ziran-2.jpg') },
        { id: 'LOOK 03', caption: '草木染色的质朴，将自然意境织入日常。', image: img('/images/look-ziran-3.jpg') },
        { id: 'LOOK 04', caption: '非遗织造的呼吸感，还原天然材质本貌。', image: img('/images/look-ziran-4.jpg') },
        { id: 'LOOK 05', caption: '图片待补充' },
        { id: 'LOOK 06', caption: '图片待补充' },
      ],
    },
    {
      title: '都市简约',
      tagline: '利落剪裁与手工肌理的平衡，为当代都市生活留出从容。',
      looks: [
        { id: 'LOOK 01', caption: '挺括棉质，剪裁利落，细节处以手工编织点缀。', image: img('/images/look-dushi-1.jpg') },
        { id: 'LOOK 02', caption: '垂坠面料，沿用古法裁剪思路，肩线与衣摆自然流畅。', image: img('/images/look-dushi-2.jpg') },
        { id: 'LOOK 03', caption: '利落剪裁与手工肌理的平衡。', image: img('/images/look-dushi-3.jpg') },
        { id: 'LOOK 04', caption: '古法裁剪的从容，融入当代都市节奏。', image: img('/images/look-dushi-4.jpg') },
        { id: 'LOOK 05', caption: '图片待补充' },
        { id: 'LOOK 06', caption: '图片待补充' },
      ],
    },
  ] as Series[],
  archive: {
    title: '过往系列',
    subtitle: 'ARCHIVE',
    intro: '历季衣装与影像归档于此，陆续补充。',
    items: [
      { name: '过往系列 · 一（年份待确认）', note: '内容待补充' },
      { name: '过往系列 · 二（年份待确认）', note: '内容待补充' },
      { name: '过往系列 · 三（年份待确认）', note: '内容待补充' },
      { name: '过往系列 · 四（年份待确认）', note: '内容待补充' },
    ] as ArchiveItem[],
  },
};

export const milestones = {
  title: '品牌纪事',
  subtitle: 'BRAND MILESTONES',
  intro: '以时间为线索，记录例外自创立以来的重要时刻。',
  items: [
    {
      year: '1996',
      title: '例外创立于广州',
      description: '品牌在广州创立，以独立原创设计与精良制作为起点，开启对东方美学与当代生活的持续探索。',
    },
    {
      year: '年份待确认',
      title: '「传袭再造」项目启动',
      description: '确立「传统文化研究—工艺转化—时尚表达」的路径，将非遗与文博元素纳入设计内核，构建从文化研究到时尚表达的完整链条。',
    },
    {
      year: '2015',
      title: '苗艺 · 非遗工艺合作系列',
      description: '深入苗地研究传统苗绣的纹样与针法，以当代手法转化为系列设计，让古老技艺重新进入日常着装。',
      image: img('/images/milestone-2015.jpg'),
      imageAlt: '苗艺系列工艺特写',
    },
    {
      year: '2016',
      title: '清韶 · 文博联名系列',
      description: '与文博机构合作，自典藏器物与纹样中提取灵感，以克制的方式完成文博元素向当代衣装的转译。',
      image: img('/images/milestone-2016.jpg'),
      imageAlt: '清韶系列影像',
    },
    {
      year: '2018',
      title: '女书 · 文化研究系列',
      description: '以流传于民间的女书为线索，展开对地域文化与女性书写传统的研究，延续品牌对本土文化基因的持续关注。',
      image: img('/images/milestone-2018.jpg'),
      imageAlt: '女书文化研究影像',
    },
    {
      year: '年份待确认',
      title: '海外殊荣获奖',
      description: '凭借特立独行的哲学思考与美学追求，品牌于海外获得多项认可，让东方当代设计进入更广阔的视野。',
    },
    {
      year: '年份待确认',
      title: '品牌概念空间 / 旗舰店开业',
      description: '品牌概念空间落地，为东方哲学式生活艺术提供可亲历的场所，也让设计与穿着被更真切地感知。',
    },
    {
      year: '2023',
      title: '大观定觉 · 当代东方美学系列',
      description: '以「大观定觉」为名推出当代东方美学系列，在传统与当代之间建立新的表达，进一步确立东方哲学式生活艺术。',
      image: img('/images/milestone-2023.jpg'),
      imageAlt: '大观定觉系列影像',
    },
  ] as Milestone[],
};

export const heritage = {
  title: '生而例外',
  subtitle: 'BORN EXCEPTION',
  intro:
    '生而例外，是例外对东方生活方式的持续回应。以工艺匠心为骨，以东方美学为魂，将非遗技艺融入当代衣装，于日常之间，成生活之艺术。',
  video: {
    src: '',
    poster: img('/images/heritage-video.jpg'),
    caption: '非遗工坊纪实 · 织造 / 染色 / 刺绣（资料待接入）',
  },
  pillars: [
    {
      title: '工艺匠心',
      description:
        '以高精专的制作技艺，于针脚、织造与剪裁之间留存手作的温度。对细节的坚持，是例外对待衣装、也对待生活的态度。',
      keywords: ['手作', '织造', '剪裁'],
      image: img('/images/heritage-stage-1.jpg'),
      imageAlt: '传统工艺研究纪实',
    },
    {
      title: '东方美学',
      description:
        '以留白与意境为语言，于当代衣装中书写东方哲学。低饱和的色泽、克制的形制，构成例外独特的美学秩序。',
      keywords: ['留白', '意境', '东方哲学'],
      image: img('/images/heritage-stage-3.jpg'),
      imageAlt: '当代东方时装表达',
    },
    {
      title: '非遗工艺',
      description:
        '从苗绣、女书到草木染，将非物质文化遗产转化为当代设计语言，让古老技艺以衣装形态回到当下生活。',
      keywords: ['苗绣', '女书', '草木染'],
      image: img('/images/heritage-stage-2.jpg'),
      imageAlt: '非遗工艺转化过程',
    },
  ] as HeritagePillar[],
  closing: '以东方哲学观照当下，于日常之间，成生活之艺术。',
};

export const membership = {
  title: '会员礼遇',
  subtitle: 'MEMBERSHIP',
  intro:
    '成为例外会员，不仅是一份身份，更是进入品牌文化世界的邀请。新季衣装、工艺分享、文化雅集，皆为会员而设。',
  benefits: [
    { title: '新季品鉴', description: '新品优先预览、到店试穿预约，先一步感受当季设计。', icon: 'preview' },
    {
      title: '文化雅集',
      description: '传袭再造工艺分享、非遗工坊体验等专属文化活动的优先参与权。',
      icon: 'gathering',
    },
    { title: '生日礼遇', description: '生日月专属礼赠与门店专属服务。', icon: 'birthday' },
    { title: '积分礼遇', description: '消费积分累积，兑换品牌礼遇与限定体验。', icon: 'points' },
  ] as Benefit[],
  formTitle: '加入例外会员',
  demoNotice: '当前为页面演示，信息未提交。',
  consent: '我已阅读并同意《会员章程》及隐私政策',
  charter: {
    title: '会员章程摘要',
    items: [
      '会员有效期：会员资格自入会之日起持续有效，具体期限以品牌最新章程为准。',
      '积分规则：消费积分按实际消费金额累积，积分使用与有效期以会员章程为准。',
      '权益获取方式：会员权益通过入会登记与消费累积逐步解锁，以品牌公示为准。',
      '会员等级说明：会员等级依据消费与参与情况划分，各等级权益以最新章程为准。',
    ],
  },
  faq: {
    title: '常见问题',
    items: [
      { q: '如何成为例外会员？', a: '于门店或官网填写入会登记即可，经品牌确认后成为会员。' },
      { q: '会员积分如何使用？', a: '积分可在指定渠道兑换品牌礼遇与限定体验，具体规则以会员章程为准。' },
      { q: '会员权益适用于所有门店吗？', a: '权益适用范围以各门店与最新会员章程为准，详情可咨询门店。' },
    ],
    note: '更多疑问，欢迎前往门店或联系品牌顾问。',
  },
};

export const boutiques = {
  title: '空间与联结',
  subtitle: 'BOUTIQUES & CONTACT',
  intro: '于城市之间，留一方可亲历的东方生活空间。',
  email: 'contact@example-brand.com',
  emailNote: '如有合作或媒体垂询，欢迎来信。',
  provinces: [
    {
      name: '广东省',
      cities: [
        {
          name: '广州',
          stores: [
            { name: '例外 · 广州总部旗舰店', address: '（地址待更新）', hours: '营业时间待更新' },
            { name: '例外 · 广州门店', address: '（地址待更新）', hours: '营业时间待更新' },
          ],
        },
        {
          name: '深圳',
          stores: [{ name: '例外 · 深圳门店', address: '（地址待更新）', hours: '营业时间待更新' }],
        },
      ],
    },
    {
      name: '北京市',
      cities: [
        {
          name: '北京',
          stores: [{ name: '例外 · 北京门店', address: '（地址待更新）', hours: '营业时间待更新' }],
        },
      ],
    },
    {
      name: '上海市',
      cities: [
        {
          name: '上海',
          stores: [{ name: '例外 · 上海门店', address: '（地址待更新）', hours: '营业时间待更新' }],
        },
      ],
    },
    {
      name: '四川省',
      cities: [
        {
          name: '成都',
          stores: [{ name: '例外 · 成都门店', address: '（地址待更新）', hours: '营业时间待更新' }],
        },
      ],
    },
    {
      name: '浙江省',
      cities: [
        {
          name: '杭州',
          stores: [{ name: '例外 · 杭州门店', address: '（地址待更新）', hours: '营业时间待更新' }],
        },
      ],
    },
  ] as Province[],
  socials: [
    { name: '微信', href: '#', icon: 'wechat' },
    { name: '微博', href: '#', icon: 'weibo' },
    { name: '小红书', href: '#', icon: 'xiaohongshu' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
  ] as Social[],
};
