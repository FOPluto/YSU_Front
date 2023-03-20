import request from '@/router/axios';
  
  export const createpsbgDoc = (projectId) => {
    return request({
      url:'/abc/ccccc/aaaaaaa',  //后端接口
      method: 'get',
      params: {
        projectId   //请求参数
      },
    })
  }