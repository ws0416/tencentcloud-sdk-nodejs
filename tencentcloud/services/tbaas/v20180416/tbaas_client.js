"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tbaas client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * 申请用户证书
     */
    async ApplyUserCert(req, cb) {
        return this.request("ApplyUserCert", req, cb);
    }
    /**
     * 根据动态部署的合约发送交易
     */
    async TransByDynamicContractHandler(req, cb) {
        return this.request("TransByDynamicContractHandler", req, cb);
    }
    /**
     * trustsql服务统一接口
     */
    async SrvInvoke(req, cb) {
        return this.request("SrvInvoke", req, cb);
    }
    /**
     * 新增交易
     */
    async Invoke(req, cb) {
        return this.request("Invoke", req, cb);
    }
    /**
     * 获取区块链网络概要
     */
    async GetClusterSummary(req, cb) {
        return this.request("GetClusterSummary", req, cb);
    }
    /**
     * 获取交易详情
     */
    async GetTransactionDetailForUser(req, cb) {
        return this.request("GetTransactionDetailForUser", req, cb);
    }
    /**
     * Bcos根据块高查询区块信息
     */
    async BlockByNumberHandler(req, cb) {
        return this.request("BlockByNumberHandler", req, cb);
    }
    /**
     * Invoke异步调用结果查询
     */
    async GetInvokeTx(req, cb) {
        return this.request("GetInvokeTx", req, cb);
    }
    /**
     * Bcos分页查询当前群组的交易信息列表
     */
    async GetTransListHandler(req, cb) {
        return this.request("GetTransListHandler", req, cb);
    }
    /**
     * Bcos发送交易
     */
    async SendTransactionHandler(req, cb) {
        return this.request("SendTransactionHandler", req, cb);
    }
    /**
     * 下载用户证书
     */
    async DownloadUserCert(req, cb) {
        return this.request("DownloadUserCert", req, cb);
    }
    /**
     * 获取区块内的交易列表
     */
    async GetBlockTransactionListForUser(req, cb) {
        return this.request("GetBlockTransactionListForUser", req, cb);
    }
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    async GetBlockList(req, cb) {
        return this.request("GetBlockList", req, cb);
    }
    /**
     * 查询交易
     */
    async Query(req, cb) {
        return this.request("Query", req, cb);
    }
    /**
     * 动态部署合约
     */
    async DeployDynamicContractHandler(req, cb) {
        return this.request("DeployDynamicContractHandler", req, cb);
    }
    /**
     * Bcos根据交易哈希查看交易详细信息
     */
    async GetTransByHashHandler(req, cb) {
        return this.request("GetTransByHashHandler", req, cb);
    }
    /**
     * Bcos分页查询当前群组下的区块列表
     */
    async GetBlockListHandler(req, cb) {
        return this.request("GetBlockListHandler", req, cb);
    }
    /**
     * 获取最新交易列表
     */
    async GetLatesdTransactionList(req, cb) {
        return this.request("GetLatesdTransactionList", req, cb);
    }
}
exports.Client = Client;
