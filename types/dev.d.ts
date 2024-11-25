declare interface UserType {
  pkId: number
  account: string
  nickname: string
  avatar?: any
  phone: string
  company?: any
  gender: number
  endTime?: string // 会员到期时间
  createTime?: string
}

declare interface ReqPageUser {
  asc?: boolean
  company?: string
  limit: number
  nickname?: string
  order?: string
  page: number
  phone?: string
}

/** 
⽤户信息
 */
declare interface UserType {
  pkId: number
  wxOpenId: string
  account: string
  nickname: string
  avatar?: any
  phone: string
  gender: number
  birthday: string
  bonus: number
  remark: string
  deleteFlag: number
  createTime?: string
  updateTime?: string
  enabled: number
}
/** 
 ⽤户分⻚请求参数信息
  */
declare interface ReqPageUser {
  limit: number
  page: number
  order?: string
  asc?: boolean
  nickname?: string
  phone?: string
}
