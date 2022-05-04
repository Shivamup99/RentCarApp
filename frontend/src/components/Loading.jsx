import React from 'react'
import { Spin } from 'antd';
function Loading() {
  return (
      <div className="spiner">
            <Spin size='large' style={{width:'100px'}}/>
      </div>

  )
}

export default Loading