<script setup lang="ts">
import { ref, watch } from "vue";
import { message } from "@/utils/message";
import { FormInstance } from "element-plus";
import { $t, transformI18n } from "@/plugins/i18n";

const SELECT_OPTIONS = [
  { label: transformI18n($t("information.chanpin")), value: 1 },
  { label: transformI18n($t("information.yunying")), value: 2 },
  { label: transformI18n($t("information.zhineng")), value: 3 },
  { label: transformI18n($t("information.jishu")), value: 4 },
  { label: transformI18n($t("information.sheji")), value: 5 },
  { label: transformI18n($t("information.shichang")), value: 6 }
];
// 产品、运营、职能、技术、设计、市场
// Product, Operations, Functional, Technical, Design, Marketing
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {};
    }
  }
});

const ruleFormRef = ref<FormInstance>();

const formVisible = ref(false);
const formData = ref(props.data);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      message(transformI18n($t("information.submitsuccess")), {
        type: "success"
      });
      formVisible.value = false;
      resetForm(formEl);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const closeDialog = () => {
  formVisible.value = false;
  resetForm(ruleFormRef.value);
};

const emit = defineEmits(["update:visible"]);
watch(
  () => formVisible.value,
  val => {
    emit("update:visible", val);
  }
);

watch(
  () => props.visible,
  val => {
    formVisible.value = val;
  }
);

watch(
  () => props.data,
  val => {
    formData.value = val;
  }
);

const rules = {
  name: [
    {
      required: true,
      message: transformI18n($t("information.pleaseinputpositionname")),
      trigger: "blur"
    }
  ]
};
</script>

<template>
  <el-dialog
    v-model="formVisible"
    :title="transformI18n($t('information.editposition'))"
    :width="680"
    draggable
    :before-close="closeDialog"
  >
    <!-- 表单内容 -->
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        :label="transformI18n($t('information.positionname'))"
        prop="name"
      >
        <el-input
          v-model="formData.name"
          :style="{ width: '480px' }"
          :placeholder="
            transformI18n($t('information.pleaseinputpositionname'))
          "
        />
      </el-form-item>
      <el-form-item
        :label="transformI18n($t('information.positionstatus'))"
        prop="status"
      >
        <el-radio-group v-model="formData.status">
          <el-radio label="0">{{
            transformI18n($t("information.positionstatusno"))
          }}</el-radio>
          <el-radio label="1">{{
            transformI18n($t("information.positionstatusyes"))
          }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="transformI18n($t('information.positiondescription'))"
        prop="description"
      >
        <el-input
          v-model="formData.description"
          :style="{ width: '480px' }"
          :placeholder="
            transformI18n($t('information.pleaseinputpositiondescription'))
          "
        />
      </el-form-item>
      <el-form-item
        :label="transformI18n($t('information.positiontype'))"
        prop="type"
      >
        <el-select
          v-model="formData.type"
          clearable
          :style="{ width: '480px' }"
        >
          <el-option
            v-for="(item, index) in SELECT_OPTIONS"
            :key="index"
            :value="item.value"
            :label="item.label"
          >
            {{ item.label }}
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeDialog">{{
        transformI18n($t("information.cancel"))
      }}</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        {{ transformI18n($t("information.confiem")) }}
      </el-button>
    </template>
  </el-dialog>
</template>
