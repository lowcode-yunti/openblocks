import { I18nObjects } from "./types";

export const zhObj: I18nObjects | undefined = {
  jsonForm: {
    defaultSchema: {
      title: "用户信息",
      description: "表单示例",
      type: "object",
      required: ["name", "phone"],
      properties: {
        name: {
          type: "string",
          title: "姓名",
        },
        phone: {
          type: "string",
          title: "手机号",
          minLength: 11,
        },
        birthday: {
          type: "string",
          title: "生日",
        },
      },
    },
    defaultUiSchema: {
      name: {
        "ui:autofocus": true,
        "ui:emptyValue": "",
      },
      phone: {
        "ui:help": "至少11个字符",
      },
      birthday: {
        "ui:widget": "date",
      },
    },
    defaultFormData: {
      name: "小明",
      phone: "13488886666",
      birthday: "1980-03-16",
    },
  },
  table: {
    columns: [
      { key: "id", title: "ID" },
      { key: "name", title: "姓名" },
      { key: "date", title: "日期" },
      { key: "department", title: "部门", isTag: true },
    ],
    defaultData: [
      {
        id: 1,
        name: "Reagen Gilberthorpe",
        date: "7/5/2022",
        department: "市场营销",
      },
      {
        id: 2,
        name: "Haroun Lortzing",
        date: "11/6/2022",
        department: "人力资源",
      },
      {
        id: 3,
        name: "Garret Kilmaster",
        date: "11/14/2021",
        department: "研发",
      },
      {
        id: 4,
        name: "Israel Harrowsmith",
        date: "4/3/2022",
        department: "培训",
      },
      {
        id: 5,
        name: "Loren O'Lagen",
        date: "9/10/2022",
        department: "服务",
      },
      {
        id: 6,
        name: "Wallis Hothersall",
        date: "4/18/2022",
        department: "销售",
      },
      {
        id: 7,
        name: "Kaia Biskup",
        date: "3/4/2022",
        department: "市场营销",
      },
      {
        id: 8,
        name: "Travers Saterweyte",
        date: "1/9/2022",
        department: "人力资源",
      },
      {
        id: 9,
        name: "Mikey Niemetz",
        date: "1/4/2022",
        department: "市场营销",
      },
      {
        id: 10,
        name: "Mano Meckiff",
        date: "2/19/2022",
        department: "研发",
      },
    ],
  },
  editorTutorials: {
    mockDataUrl: "https://63621db87521369cd06514c2.mockapi.io/api/openblocks/users",
    data: (code) => (
      <>
        组件和查询数据在此处列出，可以通过 {code("{{ }}")} 引用。例如：{code("{{table1.selectedRow}}")}。
      </>
    ),
    compProperties: (code) => (
      <>
        当组件被选中时，其属性会显示在右侧，其中包括{code("{{query1.data}}")}。在输入框中，您可以引用刚刚查询的数据，使用{code("{{ }}")}来编写JavaScript。
      </>
    ),
  },
  cascader: [
    {
      value: "California",
      label: "California",
      children: [
        {
          value: "San Francisco",
          label: "San Francisco",
          children: [
            {
              value: "The Golden Gate Bridge",
              label: "The Golden Gate Bridge",
            },
          ],
        },
      ],
    },
    {
      value: "New South Wales",
      label: "New South Wales",
      children: [
        {
          value: "Sydney",
          label: "Sydney",
          children: [
            {
              value: "Sydney Opera House",
              label: "Sydney Opera House",
            },
          ],
        },
      ],
    },
  ],
  cascaderDefult: ["California", "San Francisco", "The Golden Gate Bridge"],
};
