
// 证件类型
export const credentials = [
        {code:"01",name:"居民身份证"},
        {code:"02",name:"居民户口薄"},
        {code:"03",name:"驾驶证"},
        {code:"04",name:"军官证"},
        {code:"05",name:"士兵证"},
        {code:"06",name:"军官离退休证"},
        {code:"07",name:"中国护照"},
        {code:"08",name:"异常身份证"},
        {code:"09",name:"港澳通行证"},
        {code:"10",name:"台湾通行证"},
        {code:"11",name:"回乡证"},
        {code:"12",name:"出生证"},
        {code:"51",name:"外国护照"},
        {code:"52",name:"旅行证"},
        {code:"53",name:"居留证件"},
        {code:"99",name:"其他证件"}
]
// 退保原因
export const insuranceReason = [
        {code:"01",name:"个人经济原因，无力负担保费"},
        {code:"02",name:"对险种保障责任不满意"},
        {code:"03",name:"对业务员不满意"},
        {code:"04",name:"对公司服务不满意"},
        {code:"05",name:"人情投保"},
        {code:"06",name:"对保单受益不满意"},
        {code:"07",name:"业务员自保件/亲属件"},
        {code:"08",name:"二核拒保"},
        {code:"09",name:"其他"}
]
// 性别
export const sex = [
    {code:0,name:"男"},
    {code:1,name:"女"}
]
// 婚姻状况
export const maritalStatus = [
    {code:"1",name:"已婚"},
    {code:"2",name:"未婚"},
    {code:"3",name:"离婚"},
    {code:"4",name:"丧偶"},
    {code:"5",name:"其它"},
]
// 与被保人关系
export const selfConcat = [
    {code:"1",name:"本人"},
    {code:"2",name:"父母"},
    {code:"3",name:"配偶"},
    {code:"4",name:"子女"},
    {code:"5",name:"其他"},
    {code:"6",name:"否"}
]
// 个险申请人与出险人关系
export const applacationSelfConcat = [
    {code:"00",name:"本人"},
    {code:"01",name:"子女"},
    {code:"02",name:"配偶"},
    {code:"03",name:"父母"},
    {code:"04",name:"亲属"},
    {code:"05",name:"朋友"},
    {code:"06",name:"理财师"},
    {code:"07",name:"监护人"},
    {code:"08",name:"其他"}
]
// 文化水平
export const education = [
    {code:"0",name:"无"},
    {code:"1",name:"文盲"},
    {code:"10",name:"博士"},
    {code:"11",name:"博士后"},
    {code:"2",name:"小学"},
    {code:"3",name:"初中"},
    {code:"4",name:"高中"},
    {code:"5",name:"中专"},
    {code:"6",name:"中技"},
    {code:"7",name:"大专"},
    {code:"8",name:"本科"},
    {code:"9",name:"硕士"},
]
// 红利实现方式变更
export const editbonus = [
    {code:"1",name:"累积生息"},
    {code:"2",name:"现金领取"},
    {code:"3",name:"抵交续期保费"},
    {code:"4",name:"其他"},
    {code:"5",name:"增额交清"},
    {code:"6",name:"自动转入万能账户"}
]
// 逾期未处理方式
export const expectedUnhandled = [
    {code:"1",name:"中止合同"},
    {code:"2",name:"自动垫付"}
]
// 受益顺序
export const beneficialOrder = [
    {code:"1",name:"第一受益人"},
    {code:"2",name:"第二受益人"},
    {code:"3",name:"第三受益人"},
    {code:"4",name:"第四受益人"},
    {code:"5",name:"第五受益人"},
]
// 受益人类型
export const beneficiary = [
    {code:0,name:"生存受益人"},
    {code:1,name:"身故受益人"}
]
// 缓交
export const defer = [
    {code:"1",name:"暂缓交费"},
    {code:"2",name:"正常交费"}
]
// 交费频率
export const payFrequency = [
    {code:"1",name:"月交"},
    {code:"3",name:"季交"},
    {code:"6",name:"半年交"},
    {code:"12",name:"年交"}
]
export const filterPickerData = function(arr,code){
    let filterArr = arr.filter(item=>{
        return item.code == code
    })
    if(filterArr.length){
        return filterArr[0].name
    } else {
        return '未匹配到该项'
    }
}
// 治疗情况
export const treatmentCondition = [
    {code:"01",name:"门诊"},
    {code:"02",name:"住院"},
    {code:"03",name:"综合"}
]
// 国籍
export const national = ()=>{
    var obj = {
        'ALB': '阿尔巴尼亚',
        'DZA': '阿尔及利亚',
        'AFG': '阿富汗',
        'ARG': '阿根廷',
        'ARE': '阿联酋',
        'ABW': '阿鲁巴',
        'OMN': '阿曼',
        'AZE': '阿塞拜疆',
        'EGY': '埃及',
        'ETH': '埃塞俄比亚',
        'IRL': '爱尔兰',
        'EST': '爱沙尼亚',
        'AND': '安道尔',
        'AGO': '安哥拉',
        'AIA': '安圭拉',
        'ATG': '安提瓜和巴布达',
        'AUT': '奥地利',
        'AUS': '澳大利亚',
        'MAC': '澳门',
        'BRB': '巴巴多斯',
        'PNG': '巴布亚新几内亚',
        'BHS': '巴哈马',
        'PAK': '巴基斯坦',
        'PRY': '巴拉圭',
        'PSE': '巴勒斯坦',
        'BHR': '巴林',
        'PAN': '巴拿马',
        'BRA': '巴西',
        'BLR': '白俄罗斯',
        'BMU': '百慕大',
        'BGR': '保加利亚',
        'MNP': '北马里亚纳',
        'PLW': '帕劳',
        'BEN': '贝宁',
        'BEL': '比利时',
        'ISL': '冰岛',
        'PRI': '波多黎各',
        'POL': '波兰',
        'BOL': '玻利维亚',
        'BIH': '波斯尼亚和黑塞哥维那',
        'BWA': '博茨瓦纳',
        'BLZ': '伯利兹',
        'BTN': '不丹',
        'BFA': '布基纳法索',
        'BDI': '布隆迪',
        'BVT': '布维岛',
        'PRK': '朝鲜',
        'GNQ': '赤道几内亚',
        'DNK': '丹麦',
        'DEU': '德国',
        'TMP': '东帝汶',
        'TGO': '多哥',
        'DOM': '多米尼加共和国',
        'DMA': '多米尼克',
        'RUS': '俄罗斯',
        'ECU': '厄瓜多尔',
        'ERI': '厄立特里亚',
        'FRA': '法国',
        'FRO': '法罗群岛',
        'PYF': '法属波利尼西亚',
        'GUF': '法属圭亚那',
        'ATF': '法属南部领土',
        'VAT': '梵蒂冈',
        'PHL': '菲律宾',
        'FJI': '斐济',
        'FIN': '芬兰',
        'CPV': '佛得角',
        'GMB': '冈比亚',
        'COD': '刚果（金）',
        'COG': '刚果（布）',
        'COL': '哥伦比亚',
        'CRI': '哥斯达黎加',
        'GRD': '格林纳达',
        'GRL': '格陵兰',
        'GEO': '格鲁吉亚',
        'CUB': '古巴',
        'GLP': '瓜德罗普',
        'GUM': '关岛',
        'GUY': '圭亚那',
        'KAZ': '哈萨克斯坦',
        'HTI': '海地',
        'KOR': '韩国',
        'NLD': '荷兰',
        'ANT': '荷属安的列斯',
        'HMD': '赫德岛和麦克唐纳岛',
        'HND': '洪都拉斯',
        'KIR': '基里巴斯',
        'DJI': '吉布提',
        'KGZ': '吉尔吉斯斯坦',
        'GIN': '几内亚',
        'GNB': '几内亚比绍',
        'CAN': '加拿大',
        'GHA': '加纳',
        'GAB': '加蓬',
        'KHM': '柬埔寨',
        'CZE': '捷克',
        'ZWE': '津巴布韦',
        'CMR': '喀麦隆',
        'QAT': '卡塔尔',
        'CYM': '开曼群岛',
        'CCK': '科科斯(基林)群岛',
        'COM': '科摩罗',
        'CIV': '科特迪瓦',
        'KWT': '科威特',
        'HRV': '克罗地亚',
        'KEN': '肯尼亚',
        'COK': '库克群岛',
        'LVA': '拉脱维亚',
        'LSO': '莱索托',
        'LAO': '老挝',
        'LBN': '黎巴嫩',
        'LBR': '利比里亚',
        'LBY': '利比亚',
        'LTU': '立陶宛',
        'LIE': '列支敦士登',
        'REU': '留尼汪',
        'LUX': '卢森堡',
        'RWA': '卢旺达',
        'ROM': '罗马尼亚',
        'MDG': '马达加斯加',
        'MLT': '马耳他',
        'FLK': '马尔维纳斯群岛(福克兰群岛)',
        'MWI': '马拉维',
        'MYS': '马来西亚',
        'MLI': '马里',
        'MKD': '马斯顿',
        'MHL': '马绍尔群岛',
        'MTQ': '马提尼克',
        'MYT': '马约特',
        'MUS': '毛里求斯',
        'MRT': '毛里塔尼亚',
        'USA': '美国',
        'ASM': '美属萨摩亚',
        'UMI': '美属本土外小岛屿',
        'VIR': '美属维尔京群岛',
        'MNG': '蒙古',
        'MSR': '蒙特塞拉特',
        'BGD': '孟加拉国',
        'PER': '秘鲁',
        'FSM': '密克罗尼西亚',
        'MMR': '缅甸',
        'MDA': '摩尔多瓦',
        'MAR': '摩洛哥',
        'MCO': '摩纳哥',
        'MOZ': '莫桑比克',
        'MEX': '墨西哥',
        'NAM': '纳米比亚',
        'ZAF': '南非',
        'ATA': '南极洲',
        'SGS': '南乔治亚岛和南桑德韦奇岛',
        'SVK': '斯洛伐克',
        'SVN': '斯洛文尼亚',
        'SJM': '斯瓦尔巴群岛和扬马群岛',
        'SWZ': '斯威士兰',
        'SDN': '苏丹',
        'SUR': '苏里南',
        'SOM': '索马里',
        'SLB': '所罗门群岛',
        'TJK': '塔吉克斯坦',
        'THA': '泰国',
        'TZA': '坦桑尼亚',
        'TON': '汤加',
        'TCA': '特克斯和凯科斯群岛',
        'TTO': '特立尼达和多巴哥',
        'TUN': '突尼斯',
        'TUV': '图瓦卢',
        'TUR': '土耳其',
        'TKM': '土库曼斯坦',
        'TKL': '托克劳',
        'WLF': '瓦利斯和富图纳群岛',
        'VUT': '瓦努阿图',
        'GTM': '危地马拉',
        'VEN': '委内瑞拉',
        'BRN': '文莱',
        'UGA': '乌干达',
        'UKR': '乌克兰',
        'URY': '乌拉圭',
        'UZB': '乌兹别克斯坦',
        'ESP': '西班牙',
        'ESH': '西撒哈拉',
        'WSM': '西萨摩亚',
        'GRC': '希腊',
        'HKG': '中国香港',
        'SGP': '新加坡',
        'NCL': '新喀里多尼亚',
        'NZL': '新西兰',
        'HUN': '匈牙利',
        'SYR': '叙利亚',
        'JAM': '牙买加',
        'ARM': '亚美尼亚',
        'YEM': '也门',
        'IRQ': '伊拉克',
        'IRN': '伊朗',
        'ISR': '以色列',
        'ITA': '意大利',
        'IND': '印度',
        'IDN': '印度尼西亚',
        'GBR': '英国',
        'VGB': '英属维尔京群岛',
        'IOT': '英属印度洋领土',
        'JOR': '约旦',
        'VNM': '越南',
        'ZMB': '赞比亚',
        'ZAR': '扎伊尔',
        'TCD': '乍得',
        'GIB': '直布罗陀',
        'CHL': '智利',
        'CAF': '中非',
        'CHN': '中国',
        'TWN': '中国台湾',
        'SAU': '沙特阿拉伯',
        'CXR': '圣诞岛',
        'STP': '圣多美和普林西比',
        'SHN': '圣赫勒拿',
        'KNA': '圣基茨和尼维斯',
        'MDV': '马尔代夫',
        'LCA': '圣卢西亚',
        'SMR': '圣马力诺',
        'SPM': '圣皮埃尔和密克隆',
        'VCT': '圣文森特和格林纳丁斯',
        'LKA': '斯里兰卡',
        'SCG': '塞尔维亚和黑山',
        'NRU': '瑙鲁',
        'NPL': '尼泊尔',
        'NIC': '尼加拉瓜',
        'NER': '尼日尔',
        'NGA': '尼日利亚',
        'NIU': '纽埃',
        'NOR': '挪威',
        'NFK': '诺福克岛',
        'PCN': '皮特凯恩群岛',
        'PRT': '葡萄牙',
        'JPN': '日本',
        'SWE': '瑞典',
        'CHE': '瑞士',
        'SLV': '萨尔瓦多',
        'SLE': '塞拉利昂',
        'SEN': '塞内加尔',
        'CYP': '塞浦路斯',
        'SYC': '塞舌尔'
    }
    let arr = [];
    for (let key in obj) {
        arr.push({
            name: obj[key],
            code: key
        })
    }
    return arr
}