import XtxSkeleton from "@/components/skeleton/index.vue";
// 参考：123
declare module "vue" {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton;
  }
}
export {};
