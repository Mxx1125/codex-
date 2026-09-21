// 已确认的页面文案与演示数据。
// 门店地址、营业时间、真实媒体链接与会员规则以品牌方确认为准，未确认处均明确标注。

export type NavItem = {
  id: string;
  label: string;
};

export type Look = {
  id: string;
  series: string;
  inspiration: string;
  material: string;
  image: string;
};

export type SubSeries = {
  title: string;
  tagline: string;
  looks: Look[];
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type HeritageStage = {
  order: string;
  titleZh: string;
  titleEn: string;
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

export type Boutique = {
  city: string;
  name: string;
  address: string;
  hours: string;
};

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
  email: 'contact@example-brand.com',
  copyright: '© 1996-2026 EXCEPTION de MIXMIND',
  footerNote: '传袭再造，致当代东方生活',
};

export const navigation: NavItem[] = [
  { id: 'collection', label: '新品' },
  { id: 'milestones', label: '大事件' },
  { id: 'heritage', label: '传袭再造' },
  { id: 'membership', label: '会员' },
  { id: 'boutiques', label: '门店' },
];

export const hero = {
  // 视频地址待品牌方提供；留空时展示静态封面并关闭真实视频能力
  videoSrc: '',
  poster: '/images/hero.jpg',
  nameEn: 'EXCEPTION',
  nameZh: '例外',
  tagline: '传袭再造 · 东方哲学式当代生活艺术',
  subtitle: '1996年创立于广州 · 中国原创设计品牌',
};

export const collection = {
  title: '当季新系',
  subtitle: 'CURRENT COLLECTION',
  intro: '自传统而来，落于日常之间。当季衣装以纹样、织造与剪裁，书写东方美学在当下的留白。',
  video: {
    src: '',
    poster: '/images/collection-video.jpg',
    caption: '当季形象大片 · 系列概念影像（资料待接入）',
  },
  series: [
    {
      title: '人文浪漫',
      tagline: '刺绣针脚的温度、文博纹样的雅致，赋予服装以情意与诗意。',
      looks: [
        {
          id: 'LOOK 01',
          series: '人文浪漫',
          inspiration: '取意文博纹样的雅致，于衣间书写含蓄情意。',
          material: '苎麻质地，手工刺绣细密如织，纹样灵感取自传统文博图样，针脚之间留有手作温度。',
          image: '/images/look-renwen-1.jpg',
        },
        {
          id: 'LOOK 02',
          series: '人文浪漫',
          inspiration: '传统刺绣针脚的温度，赋予衣装以诗性。',
          material: '天然纤维为底，刺绣针法错落有致，色泽温润如陈年绢帛。',
          image: '/images/look-renwen-2.jpg',
        },
      ],
    },
    {
      title: '自然生活',
      tagline: '天然材质的呼吸感、草木染色的质朴，将自然意境融入日常穿着。',
      looks: [
        {
          id: 'LOOK 03',
          series: '自然生活',
          inspiration: '草木染色的质朴，将自然意境织入日常。',
          material: '棉麻混纺，手工草木染成，色泽取自植物本真，肌理有呼吸之感。',
          image: '/images/look-ziran-1.jpg',
        },
        {
          id: 'LOOK 04',
          series: '自然生活',
          inspiration: '非遗织造的呼吸感，还原天然材质的本貌。',
          material: '天然麻质，传统织造纹理细腻，染后留有一抹手作的自然晕染。',
          image: '/images/look-ziran-2.jpg',
        },
      ],
    },
    {
      title: '都市简约',
      tagline: '利落剪裁与手工肌理的平衡，为当代都市生活留出从容。',
      looks: [
        {
          id: 'LOOK 05',
          series: '都市简约',
          inspiration: '利落剪裁与手工肌理的平衡，为都市生活留出从容。',
          material: '挺括棉质，剪裁利落，细节处以手工编织点缀，克制而耐看。',
          image: '/images/look-dushi-1.jpg',
        },
        {
          id: 'LOOK 06',
          series: '都市简约',
          inspiration: '古法裁剪的从容，融入当代都市的日常节奏。',
          material: '垂坠面料，沿用古法裁剪思路，肩线与衣摆自然流畅，手感温润。',
          image: '/images/look-dushi-2.jpg',
        },
      ],
    },
  ] as SubSeries[],
};

export const milestones = {
  title: '品牌纪事',
  subtitle: 'BRAND MILESTONES',
  video: {
    src: '',
    poster: '/images/milestone-2016.jpg',
    caption: '品牌纪录片 · 片段（资料待接入）',
    description:
      '以影像记录品牌自创立以来的重要时刻，从广州出发，至苗艺、清韶、女书与当代东方美学的持续探索。',
  },
  intro:
    '自一九九六年的广州出发，例外以独立原创设计与精良制作为底色，于传统与当代之间，走出一条属于东方的路。',
  items: [
    {
      year: '1996',
      title: '例外创立于广州',
      description:
        '品牌在广州创立，以独立原创设计与精良制作为起点，开启对东方美学与当代生活的持续探索。',
    },
    {
      year: '年份待确认',
      title: '「传袭再造」项目启动',
      description:
        '确立「传统文化研究—工艺转化—时尚表达」的路径，将非遗与文博元素纳入设计内核，构建从文化研究到时尚表达的完整链条。',
    },
    {
      year: '2015',
      title: '苗艺 · 非遗工艺合作系列',
      description:
        '深入苗地研究传统苗绣的纹样与针法，以当代手法转化为系列设计，让古老技艺重新进入日常着装。',
      image: '/images/milestone-2015.jpg',
      imageAlt: '苗艺系列工艺特写',
    },
    {
      year: '2016',
      title: '清韶 · 文博联名系列',
      description:
        '与文博机构合作，自典藏器物与纹样中提取灵感，以克制的方式完成文博元素向当代衣装的转译。',
      image: '/images/milestone-2016.jpg',
      imageAlt: '清韶系列影像',
    },
    {
      year: '2018',
      title: '女书 · 文化研究系列',
      description:
        '以流传于民间的女书为线索，展开对地域文化与女性书写传统的研究，延续品牌对本土文化基因的持续关注。',
      image: '/images/milestone-2018.jpg',
      imageAlt: '女书文化研究影像',
    },
    {
      year: '年份待确认',
      title: '海外殊荣获奖',
      description:
        '凭借特立独行的哲学思考与美学追求，品牌于海外获得多项认可，让东方当代设计进入更广阔的视野。',
    },
    {
      year: '年份待确认',
      title: '品牌概念空间 / 旗舰店开业',
      description:
        '品牌概念空间落地，为东方哲学式生活艺术提供可亲历的场所，也让设计与穿着被更真切地感知。',
    },
    {
      year: '2023',
      title: '大观定觉 · 当代东方美学系列',
      description:
        '以「大观定觉」为名推出当代东方美学系列，在传统与当代之间建立新的表达，进一步确立东方哲学式生活艺术。',
      image: '/images/milestone-2023.jpg',
      imageAlt: '大观定觉系列影像',
    },
  ] as Milestone[],
};

export const heritage = {
  title: '传袭再造',
  subtitle: 'HERITAGE REINVENTED',
  intro:
    '传袭再造，是例外回望传统、面向当代的方法。自传统文化研究中提取基因，经工艺的转化，最终以当代时尚语言重新表达。让织物、针法与纹样不再停留于过去，而成为可穿着的当下生活。',
  video: {
    src: '',
    poster: '/images/heritage-video.jpg',
    caption: '非遗工坊纪实 · 织造 / 染色 / 刺绣（资料待接入）',
  },
  stages: [
    {
      order: '一',
      titleZh: '传统文化研究',
      titleEn: 'Cultural Research',
      description:
        '深入非遗源头，研究传统织造、染色、刺绣技艺的工艺谱系与文化基因。以田野考察与匠人访谈为方法，记录濒临遗忘的手艺，梳理其背后的地域记忆与审美逻辑，为设计确立可追溯的文化坐标。',
      keywords: ['非遗', '织造', '纹样'],
      image: '/images/heritage-stage-1.jpg',
      imageAlt: '传统工艺研究纪实',
    },
    {
      order: '二',
      titleZh: '工艺转化',
      titleEn: 'Craft Transformation',
      description:
        '将传统工艺解构为可量产的设计语言，保留手作温度的同时融入现代制衣体系。在纹样、针法与材质之间反复推敲，使古老技艺适应当代穿着，又不失其本来的精神与手感。',
      keywords: ['解构', '手作', '现代制衣'],
      image: '/images/heritage-stage-2.jpg',
      imageAlt: '工艺转化过程',
    },
    {
      order: '三',
      titleZh: '时尚表达',
      titleEn: 'Fashion Expression',
      description:
        '以当代美学重新诠释传统元素，让文化遗产以时装形态回到当代生活。传统不再是符号的堆叠，而是融入剪裁、质地与细节，成为可感知、可穿着的东方哲学式生活艺术。',
      keywords: ['当代美学', '时装', '生活艺术'],
      image: '/images/heritage-stage-3.jpg',
      imageAlt: '当代东方时装表达',
    },
  ] as HeritageStage[],
  closing: '以东方哲学观照当下，于日常之间，成生活之艺术。',
};

export const membership = {
  title: '会员礼遇',
  subtitle: 'MEMBERSHIP',
  intro:
    '成为例外会员，不仅是一份身份，更是进入品牌文化世界的邀请。新季衣装、工艺分享、文化雅集，皆为会员而设。',
  benefits: [
    {
      title: '新季品鉴',
      description: '新品优先预览、到店试穿预约，先一步感受当季设计。',
      icon: 'preview',
    },
    {
      title: '文化雅集',
      description: '传袭再造工艺分享、非遗工坊体验等专属文化活动的优先参与权。',
      icon: 'gathering',
    },
    {
      title: '生日礼遇',
      description: '生日月专属礼赠与门店专属服务。',
      icon: 'birthday',
    },
    {
      title: '积分礼遇',
      description: '消费积分累积，兑换品牌礼遇与限定体验。',
      icon: 'points',
    },
  ] as Benefit[],
  formTitle: '加入例外会员',
  demoNotice: '当前为页面演示，信息未提交。',
  consent:
    '我已阅读并同意《会员章程》及隐私政策',
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
      {
        q: '如何成为例外会员？',
        a: '于门店或官网填写入会登记即可，经品牌确认后成为会员。',
      },
      {
        q: '会员积分如何使用？',
        a: '积分可在指定渠道兑换品牌礼遇与限定体验，具体规则以会员章程为准。',
      },
      {
        q: '会员权益适用于所有门店吗？',
        a: '权益适用范围以各门店与最新会员章程为准，详情可咨询门店。',
      },
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
  stores: [
    { city: '广州', name: '品牌总部旗舰店', address: '（地址待更新）', hours: '营业时间待更新' },
    { city: '北京', name: '品牌门店', address: '（地址待更新）', hours: '营业时间待更新' },
    { city: '上海', name: '品牌门店', address: '（地址待更新）', hours: '营业时间待更新' },
    { city: '深圳', name: '品牌门店', address: '（地址待更新）', hours: '营业时间待更新' },
    { city: '成都', name: '品牌门店', address: '（地址待更新）', hours: '营业时间待更新' },
    { city: '杭州', name: '品牌门店', address: '（地址待更新）', hours: '营业时间待更新' },
  ] as Boutique[],
  socials: [
    { name: '微信', href: '#', icon: 'wechat' },
    { name: '微博', href: '#', icon: 'weibo' },
    { name: '小红书', href: '#', icon: 'xiaohongshu' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
  ] as Social[],
};
