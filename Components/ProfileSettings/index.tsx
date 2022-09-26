import { Avatar, Col, message, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AutoRechargeSettings from './AutoRechargeSettings';
import ChangePassword from './ChangePassword';
import EmailNotifications from './EmailNotifications';
import UpdateProfile from './UpdateProfile';
require('./index.less')
const { TabPane } = Tabs;


const index = () => {

    const [key, setKey] = useState('emailNotifications');

    const tabsCallback = (key: any) => {
        setKey(key)
    }

    return (
        <div className="mt-30 profileSettingsDiv">

            <Tabs
                onChange={(e) => { tabsCallback(e) }}
                activeKey={key}
                centered
            >
                <TabPane
                    tab={`Update Profile`}
                    key="updateProfile"
                >
                    <UpdateProfile></UpdateProfile>
                </TabPane>

                <TabPane
                    tab={`Change Password`}
                    key="changePassword"
                >
                    <ChangePassword></ChangePassword>
                </TabPane>

                <TabPane
                    tab={`Email Notifications`}
                    key="emailNotifications"
                >
                    <EmailNotifications></EmailNotifications>
                </TabPane>

                <TabPane
                    tab={`Auto Recharge Settings`}
                    key="autoRechargeSettings"
                >
                    <AutoRechargeSettings></AutoRechargeSettings>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default index;
