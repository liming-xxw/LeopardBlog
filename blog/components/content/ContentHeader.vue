<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
      >
        <div
          class="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style="font-size: 0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div
              class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl"
            >
              <div
                class="w-full relative flex items-center  px-4 pt-14 pb-8 overflow-hidden sm:px-6 sm:pt-8 md:p-6 lg:p-8"
              >
                <button
                  type="button"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  @click="open = false"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      {{ useUser.user.nickname }}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      还没有留下任何留言哦
                    </p>
                  </div>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">账号</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{ useUser.user.username }}
                        </dd>
                      </div>
                      <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">邮箱</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{ useUser.user.email }}
                        </dd>
                      </div>
                      <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">
                          注册日期
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{ useUser.user.createdAt }}
                        </dd>
                      </div>
                      <div
                        class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">性别</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          男
                        </dd>
                      </div>
                      <div
                        class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      >
                        <dt class="text-sm font-medium text-gray-500">About</dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                          anim incididunt cillum culpa consequat. Excepteur qui
                          ipsum aliquip consequat sint. Sit id mollit nulla
                          mollit nostrud in ea officia proident. Irure nostrud
                          pariatur mollit ad adipisicing reprehenderit deserunt
                          qui eu.
                        </dd>
                      </div>

                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
  <div class="search">
    <div class="search-input">
      <input
        type="text"
        name="price"
        id="price"
        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        placeholder="搜索博客文章"
      />
    </div>
    <div class="login-box">
      <div class="login-user" v-if="!useUser.IsLogin">
        <div @click="$router.push('/login')">登录</div>
        <div @click="$router.push('/register')">注册</div>
      </div>
      <div class="login-img" v-else>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton>
              <img
                style="width: 40px; height: 40px"
                class="rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                :src="useUser.user.avatar"
                alt=""
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    @click="open = true"
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <AcademicCapIcon
                      :active="active"
                      class="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />个人信息
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <CogIcon
                      :active="active"
                      class="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />设置
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                    @click="edit"
                  >
                    <ArrowCircleLeftIcon
                      :active="active"
                      class="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />退出
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XIcon, PaperClipIcon } from "@heroicons/vue/outline";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useUsers } from "../../store/index";
import {
  ArrowCircleLeftIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/vue/solid";
import message from "../utils/message";
const useUser = useUsers();
const router = useRouter();
const token = useCookie<{ token: string }>("token");
const open = ref<boolean>(false);
const edit = () => {
  token.value = {
    token: null,
  };
  useUser.setIsLogn(false);
  message({ type: "success", message: "注销成功,成功退出" });
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.search {
  padding: 10px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  .search-input {
    width: 300px;
    @media screen and (min-width: 100px) and (max-width: 1200px) {
    }
  }
  .login-user {
    display: flex;
    gap: 10px;
    div {
      cursor: pointer;
      color: #7aa297;
      &:hover {
        color: black;
      }
    }
  }
  // .login-img{
  //    box-sizing: border-box;
  //    padding-right: 30px;
  // }
}
</style>
