import { useState } from 'react';
import { Modal } from 'antd';
function Welcome() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <img
        id="img"
        onClick={() => setVisible(!visible)}
        style={{ cursor: 'zoom-in' }}
        src="https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png"
        alt=""
      />
      <Modal visible={visible} centered footer={null}>
        <img
          id="img"
          // onClick={() => setVisible(!visible)}
          // style={{ cursor: 'zoom-in' }}
          src="https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png"
          alt=""
        />
      </Modal>
    </div>
  );
}
Welcome.title = '欢迎';
export default Welcome;
