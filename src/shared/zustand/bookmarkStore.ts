import { create } from "zustand";

interface BookmarkState {
  bookmarkedIds: number[];
  setBookmarkedIds: (ids: number[]) => void;
  toggleBookmark: (id: number) => void;
}

const useBookmarkStore = create<BookmarkState>((set) => ({
  bookmarkedIds: [],
  setBookmarkedIds: (ids) => set({ bookmarkedIds: ids }),
  toggleBookmark: (id) =>
    set((state) => {
      const isMarked = state.bookmarkedIds.includes(id);
      return {
        bookmarkedIds: isMarked
          ? state.bookmarkedIds.filter((i) => i !== id)
          : [...state.bookmarkedIds, id],
      };
    }),
}));

export default useBookmarkStore;
