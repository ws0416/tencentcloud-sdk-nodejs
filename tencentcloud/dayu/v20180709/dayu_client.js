/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const OrderBy = models.OrderBy;
const KeyValue = models.KeyValue;
const DescribeResourceListRequest = models.DescribeResourceListRequest;
const DescribeResourceListResponse = models.DescribeResourceListResponse;
const KeyValueRecord = models.KeyValueRecord;


/**
 * dayu client
 * @class
 */
class DayuClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dayu.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * 获取资源列表
     * @param {DescribeResourceListRequest} req
     * @param {function(string, DescribeResourceListResponse):void} cb
     * @public
     */
    DescribeResourceList(req, cb) {
        let resp = new DescribeResourceListResponse();
        this.request("DescribeResourceList", req, resp, cb);
    }


}
module.exports = DayuClient;
