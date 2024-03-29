import { atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "atom-key",
  storage: sessionStorage,
});

export const familyAtomFamily = atomFamily({
  key: "cardFamily",
  default: (data: { id: string; name: string }) => ({
    ...data,
    id: data.id,
    count: 0,
    title: "title" + data.id?.toString(),
  }),
  effects_UNSTABLE: [persistAtom],
});
