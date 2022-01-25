<template>
  <div class="BlogTags">
    <div class="header">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6">
          <a-form-item label="搜索博客分类">
            <a-input-search placeholder="搜索博客大分类" style="width: 200px" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-form-item label="子分类">
            <a-input-search placeholder="搜索博客子分类" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-form-item label="Activity name">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-form-item label="Activity name">
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-table
        :data-source="tagslist"
        rowKey="id"
        :row-selection="rowSelection"
        childrenColumnName="superiors"
      >
        <a-table-column key="id" title="标签Id" data-index="id" :width="350">
          <template #default="{ text: id }">
            <span> {{ id }} </span>
          </template>
        </a-table-column>
        <a-table-column
          key="name"
          title="标签名称"
          data-index="name"
          :width="350"
        >
          <template #default="{ text: name }">
            <span> {{ name }} </span>
          </template>
        </a-table-column>
        <a-table-column key="createdAt" title="创建日期" data-index="createdAt">
          <template #default="{ text: createdAt }">
            <span v-text="day(createdAt)"></span>
          </template>
        </a-table-column>
        <a-table-column key="action" title="操作">
          <template #default="{ record }">
            <span>
              <a-button type="link" @click="tagsUpdate(record)">编辑</a-button>
              <a-divider type="vertical" v-show="record.grade != 1" />
              <a-popconfirm
                title="确认删除该标签"
                ok-text="确认"
                cancel-text="取消"
                @confirm="tagsDelete(record.id)"
              >
                <a-button v-show="record.grade != 1" type="link">删除</a-button>
              </a-popconfirm>
              <a-divider type="vertical" />
              <a-button type="link" @click="tagsCreate(record.id)"
                >新增</a-button
              >
            </span>
            <a-modal
              v-model:visible="visible"
              title="编辑"
              @ok="TagUpdateClick"
              :mask="false"
              okText="确认"
              cancelText="取消"
            >
              <a-form
                :model="TagUpdateValue"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 17 }"
              >
                <a-form-item label="标签">
                  <a-input v-model:value="TagUpdateValue.name" />
                </a-form-item>
                <a-form-item label="标签" v-if="TagUpdateValue.superiors">
                  <div
                    v-for="(item, index) in TagUpdateValue.superiors"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </a-form-item>
                <a-form-item label="标签" v-else>
                  <a-select
                    v-model:value="TagUpdateValue.superiorid"
                    placeholder="选择父级分类"
                    :options="TagOption"
                  ></a-select>
                </a-form-item>
              </a-form>
            </a-modal>
            <a-modal
              v-model:visible="visibleCreate"
              title="新增"
              @ok="TagCreateClick"
              :mask="false"
              okText="确认"
              cancelText="取消"
            >
              <a-form
                :model="TagCreateValue"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 17 }"
              >
                <a-form-item label="标签">
                  <a-input v-model:value="TagCreateValue.name" />
                </a-form-item>
                <!-- <a-form-item label="标签">
                  <a-select
                    v-model:value="TagCreateValue.superiorid"
                    placeholder="选择父级分类"
                    :options="TagOption"
                  ></a-select>
                </a-form-item> -->
              </a-form>
            </a-modal>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { TagList, TagDelete, TagUpdate, TagCreate } from "../../service/Tags";
import { option } from "../../interface/interfaceUtils";
import { message } from "ant-design-vue";
import { day } from "../../utils/dateUtils";
interface Tags {
  id?: number;
  name: string;
  createdAt?: string;
  updateAt?: string;
  superiors?: [];
  superiorid?: string;
  grade?: string;
}

const tagslist = ref<Tags[]>([]);
const TagUpdateValue = reactive<Tags>({
  name: "",
  superiors: [],
});
const TagCreateValue = reactive<Tags>({
  name: "",
  superiorid: "",
});
const TagOption = ref<option[]>([]);

const visible = ref<boolean>(false);
const visibleCreate = ref<boolean>(false);

const tagsfetch = async () => {
  const date: any = await TagList({
    search: {
      grade: "1",
    },
  });
  tagslist.value = date.data;
  TagOption.value = date.data.map((v: Tags) => ({
    value: v.id,
    label: v.name,
  }));
};

const tagsDelete = async (id: string) => {
  const data = await TagDelete(id);
  if (data.code == 200) {
    message.success("删除成功");
    tagsfetch();
  } else {
    message.error("删除失败,请检查id");
  }
};

const tagsUpdate = async (record: Tags) => {
  TagUpdateValue.id = record.id;
  TagUpdateValue.name = record.name;
  TagUpdateValue.superiors = record.superiors;
  visible.value = true;
};

const TagUpdateClick = async () => {
  delete TagUpdateValue.superiors;
  const data = await TagUpdate(TagUpdateValue);
  if (data.code == 200) {
    message.success("修改成功");
    tagsfetch();
    visible.value = false;
  } else {
    message.error("修改成功,请检查id");
  }
};

const tagsCreate = (id: string) => {
  visibleCreate.value = true;
  TagCreateValue.superiorid = id;
  TagCreateValue.grade = "2";
};

const TagCreateClick = async () => {
  const data = await TagCreate(TagCreateValue);
  if (data.code == 200) {
    message.success("添加成功");
    tagsfetch();
    visibleCreate.value = false;
  } else {
    message.error("添加失败,请检查id");
  }
};

onMounted(() => {
  tagsfetch();
});

const rowSelection = ref({
  checkStrictly: false,
  onChange: (selectedRowKeys: (string | number)[], selectedRows: Tags[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record: Tags, selected: boolean, selectedRows: Tags[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (
    selected: boolean,
    selectedRows: Tags[],
    changeRows: Tags[]
  ) => {
    console.log(selected, selectedRows, changeRows);
  },
});
</script>

<style lang="scss" scoped>
.BlogTags {
  background: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>
