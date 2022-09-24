import * as Widgets from "../components/widgets";
import React from "react";
const {
  VanillaFieldSelect,
  VanillaConjs,
  VanillaButton,
  VanillaButtonGroup,
  VanillaProvider,
  VanillaValueSources,
  vanillaConfirm,
  VanillaSwitch,
} = Widgets;

export const settings = {
  formatField: (field, parts, label2, fieldDefinition, config, isForDisplay) => {
    if (isForDisplay)
      return label2;
    else
      return field;
  },

  renderField: (props) => <VanillaFieldSelect {...props} />,
  renderOperator: (props) => <VanillaFieldSelect {...props} />,
  renderFunc: (props) => <VanillaFieldSelect {...props} />,
  renderConjs: (props) => <VanillaConjs {...props} />,
  renderSwitch: (props) => <VanillaSwitch {...props} />,
  renderButton: (props) => <VanillaButton {...props} />,
  renderButtonGroup: (props) => <VanillaButtonGroup {...props} />,
  renderProvider: (props) => <VanillaProvider {...props} />,
  renderValueSources: (props) => <VanillaValueSources {...props} />,
  renderConfirm: vanillaConfirm,
  renderSwitchPrefix: () => <>{"Conditions"}</>,

  valueSourcesInfo: {
    value: {},
  },
  fieldSeparator: ".",
  fieldSeparatorDisplay: ".",
  renderSize: "small",
  maxLabelsLength: 100,
  canReorder: true,
  canRegroup: true,
  showLock: false,
  canDeleteLocked: false,
  showNot: true,
  canLeaveEmptyGroup: true,
  shouldCreateEmptyGroup: false,
  forceShowConj: false,
  canShortMongoQuery: true,
  removeEmptyGroupsOnLoad: true,
  removeIncompleteRulesOnLoad: true,
  removeInvalidMultiSelectValuesOnLoad: true,
  groupActionsPosition: "topRight", // oneOf [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]
  setOpOnChangeField: ["keep", "default"], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
  groupOperators: ["some", "all", "none"],

  convertableWidgets: {
    "number": ["slider", "rangeslider"],
    "slider": ["number", "rangeslider"],
    "rangeslider": ["number", "slider"],
    "text": ["textarea"],
    "textarea": ["text"]
  },

  // localization
  locale: {
    moment: "en",
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  funcLabel: "Function",
  fieldPlaceholder: "选择字段",
  funcPlaceholder: "选择功能",
  operatorPlaceholder: "选择操作",
  lockLabel: "Lock",
  lockedLabel: "Locked",
  deleteLabel: null,
  addGroupLabel: "新增分组",
  addCaseLabel: "添加条件",
  addDefaultCaseLabel: "添加默认条件",
  defaultCaseLabel: "Default:",
  addRuleLabel: "新增规则",
  addSubRuleLabel: "添加子规则",
  delGroupLabel: "",
  notLabel: "不包含",
  valueSourcesPopupTitle: "选择数据来源",
  removeRuleConfirmOptions: null,
  removeGroupConfirmOptions: null,

  defaultGroupConjunction: "AND",
  jsonLogic: {
    groupVarKey: "var",
    altVarKey: "var",
    lockedOp: "locked"
  }
};
