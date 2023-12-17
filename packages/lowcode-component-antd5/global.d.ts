/**
 * [官方类型](https://github.com/alibaba/lowcode-engine/blob/main/packages/types/src/shell/model/exclusive-group.ts)
 */
declare namespace LowcodeSpace {
  /** 物料meta */
  interface Meta<componentName = string> {
    /** 组件名 */
    componentName: componentName,
    /** 拖拉显示的组件名/大纲名 */
    title: string,
    /** 组件描述 */
    description: string,
    /** 组件文档链接 */
    docUrl?: string
    /** group分类 */
    group: string,
    /** category分类 */
    category: string,
    /** category分类中的排序 */
    priority: number,
    /** 组件标签 */
    tags: Array<string>,
    /** 关键词 */
    keywords: Array<string>,
    /** 组件研发模式 */
    devMode: 'proCode' | 'lowCode',
    /** 
     * npm 源引入完整描述对象
     */
    npm: {
      /** 源码组件库名 */
      package: string,
      /** npm包版本 */
      version: string,
      /** 导出组件名 */
      exportName: componentName,
      /** npm入口文件 */
      main: string,
      /** 是否解构 */
      destructuring: true,
      /** 子组件名 */
      subName?: string
    },
    /** 编辑体验增强！ */
    configure: {
      /** 属性面板配置 */
      props: Array<{
        /** 属性名(英文名) */
        name: string
        /** 属性名(中文)  */
        title: string | {
          /** 属性名 */
          label: string | {
            type: 'i18n'
            /** 英文下显示 */
            'en-US': string
            /** 中文下显示 */
            'zh-CN': string
          }
          /** 鼠标移入提示文本 */
          tip?: string
        }
        /** 单个控件 (setter) 描述，搭建基础协议组件的描述对象，支持 JSExpression / JSFunction / JSSlot */
        setter: string | {
          /** setter控件名称 */
          componentName: SetterComponentNames
          /** 默认值 */
          initialValue?: any
          /** 控件props */
          props?: any
          /** 必需 */
          isRequired?: boolean
          /** 隐藏该属性控件 */
          hideParams?: boolean
        }

        /** 指定类型 可选值为 'field' */
        type?: 'field' | 'group'
        /** 指定类型 默认为 'inline' */
        display?: 'accordion' | 'inline' | 'block' | 'plain' | 'popup' | 'entry'
        /** 分类下的属性列表 type = 'group' 生效 */
        items?: Array<any>
        /** 默认值 type = 'field' 生效 */
        defaultValue?: any
        /** 是否支持配置变量 type = 'field' 生效 */
        supportVariable?: boolean
        /** 配置当前 prop 是否展示 */
        condition?: () => boolean
        /** 配置当前 prop 是否忽略默认值处理逻辑，如果返回值是 true 引擎不会处理默认值 */
        ignoreDefaultValue?: () => boolean
        /** 其他配置属性（不做流通要求） */
        extraProps?: {
          getValue?: Function
          setValue?: Function
        }
      }>,
      /** 通用扩展配置能力支持性 */
      supports?: {
        /** 支持事件列表 */
        events?: Array<string | {
          name: string
          template: string
        }>
        /** 支持循环设置 */
        loop?: boolean
        /** 支持样式设置 */
        style?: boolean
        /** 支持条件设置 */
        condition?: boolean
      },
      /** 高级特性配置 */
      advanced?: {
        /** 组件拖入“设计器”时根据此配置自动生成 children 节点 schema */
        initialChildren?: Function //NodeData[] | (target: IPublicModelSettingField) => NodeData[]
        /** 用于配置设计器中组件 resize 操作工具的样式和内容 */
        getResizingHandlers?: (currentNode: LowcodeNode) => Array<any>
        /** 配置 callbacks 可捕获引擎抛出的一些事件，例如 onNodeAdd、onResize 等 */
        callbacks: {
          /** 在容器中拖入组件时触发的事件回调 */
          onNodeAdd?: (dragment: Dragment, currentNode: LowcodeNode) => void
          /** 在容器中删除组件时触发的事件回调 */
          onNodeRemove?: (dragment: Dragment, currentNode: LowcodeNode) => void
          /** 调整容器尺寸时触发的事件回调，常常与 getResizingHandlers 搭配使用 */
          onResize?: Function
          /** 调整容器尺寸开始时触发的事件回调，常常与 getResizingHandlers 搭配使用 */
          onResizeStart?: Function
          /** 调整容器尺寸结束时触发的事件回调，常常与 getResizingHandlers 搭配使用 */
          onResizeEnd?: Function
          /** 容器节点结构树发生变化时触发的回调 */
          onSubtreeModified?: (currentNode: LowcodeNode) => void
          /** 鼠标按下操作回调 */
          onMouseDownHook?: (dragment: Dragment, currentNode: LowcodeNode) => void
          /** 鼠标单击操作回调 */
          onClickHook?: (dragment: Dragment, currentNode: LowcodeNode) => void
          /** 鼠标双击操作回调 */
          onDblClickHook?: (dragment: Dragment, currentNode: LowcodeNode) => void
          /** 节点被拖动回调 */
          onMoveHook?: (currentNode: LowcodeNode) => boolean
          /** 节点被 hover 回调 */
          onHoverHook?: (currentNode: LowcodeNode) => boolean
          /** 容器节点的子节点被拖动回调 */
          onChildMoveHook?: (childNode, currentNode: LowcodeNode) => boolean
        },
      },
      /** 组件能力配置 */
      component?: {
        /** 是否容器组件 */
        isContainer?: boolean
        /** 组件是否带浮层，浮层组件拖入设计器时会遮挡画布区域，此时应当辅助一些交互以防止阻挡 */
        isModal?: boolean
        /** 组件树描述信息 */
        descriptor?: string
        /** 嵌套控制：防止错误的节点嵌套，比如 a 嵌套 a, FormField 只能在 Form 容器下，Column 只能在 Table 下等 */
        nestingRule?: {
          /** 子节点类型白名单 */
          childWhitelist?: string | Function
          /** 父节点类型白名单 */
          parentWhitelist?: string | Function
          /** 后裔节点类型黑名单 */
          descendantBlacklist?: string | Function
          /** 祖父节点类型白名单 */
          ancestorWhitelist?: string | Function
        }
        /** 是否存在渲染的根节点 */
        isNullNode?: boolean
        /** 是否是 layout 布局组件 */
        isLayout?: boolean
        /** 组件选中框的 cssSelector */
        rootSelector?: string
        /** 用于屏蔽在设计器中选中组件时提供的操作项，默认操作项有 copy、hide、remove */
        disableBehaviors?: string[]
        /** 用于详细配置上述操作项的内容 */
        actions?: Object
        /** 是否是最小渲染单元，最小渲染单元下的组件渲染和更新都从单元的根节点开始渲染和更新。如果嵌套了多层最小渲染单元，渲染会从最外层的最小渲染单元开始渲染。 */
        isMinimalRenderUnit?: boolean
      },
    },
    /** schemas */
    snippets: Array<{
      /** 组件中文名 */
      title: string
      /** 组件图片截图 */
      screenshot: string
      /** 组件对应的schema */
      schema: Schema,
    }>
  }

  /** 组件对应的schema */
  interface Schema {
    [key: string]: any
    /** 组件名 */
    componentName: string
    props?: {
      [key: string]: any
      /** key */
      key?: string
      /** 组件名 */
      componentName?: string
    },
    /** 插槽内容 */
    children?: string | Array<Schema>
    /** 控制元素显示/隐藏（大纲树）默认false */
    hidden?: boolean
    /** 重命名节点(组件)（大纲树）默认"" */
    title?: string
    /** 锁定组件及其子组件（大纲树|面板）默认false */
    isLocked?: boolean
    /** 是否渲染 默认true */
    condition?: boolean | {
      type: 'JSExpression'
      value: string
    }
    /** 高级-循环 */
    loop?: {
      [key: string]: any
    }
    /** 高级-循环 */
    loopArgs?: Array<string | {
      type: "JSExpression",
      value: string,
      mock?: string
    }>
  }

  /** 拖拽对象 */
  interface Dragment {
    /** 组件的meta, 此类型不准确，得根据实际情况取 */
    componentMeta?: Meta & {
      isComponentMeta: boolean
    }
    /** 导出组件schema */
    exportSchema: () => Schema
    /** 组件名 */
    componentName: string
  }

  /** 低代码节点 */
  interface LowcodeNode {
    isNode: boolean
    /** 对应schema里面的id */
    _id: string
    /** 页面Page对象 */
    document: Document
    /** 导出schema */
    exportSchema: () => Schema
    /** 获取dom */
    getDOMNode: () => Element
  }

  /** 页面对象 */
  interface Document {
    /** 创建一个节点 */
    createNode: (ComponentSchema: Schema) => LowcodeNode
    /** 导出Page schema */
    exportSchema: () => Schema
    /** 导入Page Schema */
    importSchema: (Schema) => void
  }

  /** 预置设计器列表 */
  type SetterComponentNames = 
    'ArraySetter' |
    'BehaviorSetter' |
    'BoolSetter' |
    'ClassNameSetter' |
    'ColorSetter' |
    'DateMonthSetter' |
    'DateRangeSetter' |
    'DateSetter' |
    'DateYearSetter' |
    'EventSetter' |
    'FunctionSetter' |
    'IconSetter' |
    'JsonSetter' |
    'MixedSetter' |
    'NumberSetter' |
    'ObjectSetter' |
    'RadioGroupSetter' |
    'SelectSetter' |
    'SlotSetter' |
    'StringSetter' |
    'StyleSetter' |
    'TextAreaSetter' |
    'TimePicker' |
    'VariableSetter'
}