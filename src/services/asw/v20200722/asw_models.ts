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

/**
 * DescribeExecutions请求参数结构体
 */
export interface DescribeExecutionsRequest {
  /**
   * 状态机资源名
   */
  StateMachineResourceName: string

  /**
   * 页大小，最大100
   */
  PageSize: number

  /**
   * 页序号，从1开始
   */
  PageIndex: number

  /**
   * 按状态过滤条件，INIT，RUNNING，SUCCEED，FAILED，TERMINATED
   */
  FilterExecutionStatus?: string

  /**
   * 按执行名过滤条件
   */
  FilterExecutionResourceName?: string
}

/**
 * DescribeExecution返回参数结构体
 */
export interface DescribeExecutionResponse {
  /**
   * 执行资源名
   */
  ExecutionResourceName?: string

  /**
   * 资源名称
   */
  Name?: string

  /**
   * 执行开始时间，毫秒
   */
  StartDate?: string

  /**
   * 执行结束时间，毫秒
   */
  StopDate?: string

  /**
   * 状态机资源名
   */
  StateMachineResourceName?: string

  /**
   * 执行状态。INIT，RUNNING，SUCCEED，FAILED，TERMINATED
   */
  Status?: string

  /**
      * 执行的输入
注意：此字段可能返回 null，表示取不到有效值。
      */
  Input?: string

  /**
      * 执行的输出
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output?: string

  /**
   * 启动执行时，状态机的定义
   */
  ExecutionDefinition?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartExecution返回参数结构体
 */
export interface StartExecutionResponse {
  /**
   * 执行资源名
   */
  ExecutionResourceName?: string

  /**
   * 执行开始时间
   */
  StartDate?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExecution请求参数结构体
 */
export interface DescribeExecutionRequest {
  /**
   * 执行资源名
   */
  ExecutionResourceName: string
}

/**
 * DescribeFlowServiceDetail返回参数结构体
 */
export interface DescribeFlowServiceDetailResponse {
  /**
   * 状态机所属服务名
   */
  FlowServiceName?: string

  /**
   * 状态机状态
   */
  Status?: string

  /**
      * 定义文本（JSON格式）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Definition?: string

  /**
      * 角色资源名
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoleResource?: string

  /**
   * 状态机的类型，可以为 （EXPRESS/STANDARD）
   */
  Type?: string

  /**
   * 生成时间
   */
  CreateDate?: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 状态机所属服务中文名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowServiceChineseName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowService返回参数结构体
 */
export interface CreateFlowServiceResponse {
  /**
   * 状态机所属服务资源
   */
  FlowServiceResource?: string

  /**
   * 生成日期
   */
  CreateDate?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartExecution请求参数结构体
 */
export interface StartExecutionRequest {
  /**
   * 状态机资源名
   */
  StateMachineResourceName: string

  /**
   * 输入参数
   */
  Input?: string

  /**
   * 本次执行名。如果不填，系统会自动生成。如果填，应保证状态机下唯一
   */
  Name?: string
}

/**
 * ModifyFlowService返回参数结构体
 */
export interface ModifyFlowServiceResponse {
  /**
   * 状态机资源名
   */
  FlowServiceResource?: string

  /**
   * 更新时间
   */
  UpdateDate?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowService请求参数结构体
 */
export interface CreateFlowServiceRequest {
  /**
   * 定义文本（JSON格式）
   */
  Definition: string

  /**
   * 状态机所属服务名
   */
  FlowServiceName: string

  /**
   * 是不是新的角色
   */
  IsNewRole: boolean

  /**
   * 状态机类型（EXPRESS，STANDARD）
   */
  Type: string

  /**
   * 状态机所属服务中文名
   */
  FlowServiceChineseName?: string

  /**
   * 角色资源名
   */
  RoleResource?: string

  /**
   * 备注
   */
  Description?: string
}

/**
 * DescribeExecutions返回参数结构体
 */
export interface DescribeExecutionsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyFlowService请求参数结构体
 */
export interface ModifyFlowServiceRequest {
  /**
   * 状态机资源名
   */
  FlowServiceResource: string

  /**
   * 定义JSON
   */
  Definition: string

  /**
   * 状态机所属服务名
   */
  FlowServiceName: string

  /**
   * 状态机所属服务中文名
   */
  FlowServiceChineseName: string

  /**
   * 是否是新角色
   */
  IsNewRole: boolean

  /**
   * 状态机类型
   */
  Type: string

  /**
   * 角色资源名
   */
  RoleResource: string

  /**
   * 状态机备注
   */
  Description?: string
}

/**
 * DescribeFlowServiceDetail请求参数结构体
 */
export interface DescribeFlowServiceDetailRequest {
  /**
   * 状态机所属服务资源名
   */
  FlowServiceResource: string
}
