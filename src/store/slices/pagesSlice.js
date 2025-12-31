import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API functions - replace with actual API calls
const mockFetchPages = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data
  return [
    {
      pageId: '1',
      title: 'Homepage',
      description: 'Main landing page',
      heroImage: null,
    },
    {
      pageId: '2',
      title: 'About Us',
      description: 'About our company',
      heroImage: null,
    },
  ];
};

const mockDeletePage = async (pageId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return pageId;
};

const mockRenamePage = async ({ pageId, newTitle }) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return { pageId, newTitle };
};

export const fetchPages = createAsyncThunk(
  'pages/fetchPages',
  async (_, { rejectWithValue }) => {
    try {
      const pages = await mockFetchPages();
      return pages;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePage = createAsyncThunk(
  'pages/deletePage',
  async (pageId, { rejectWithValue }) => {
    try {
      await mockDeletePage(pageId);
      return pageId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const renamePage = createAsyncThunk(
  'pages/renamePage',
  async ({ pageId, newTitle }, { rejectWithValue }) => {
    try {
      const result = await mockRenamePage({ pageId, newTitle });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pages: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch pages';
      })
      .addCase(deletePage.fulfilled, (state, action) => {
        state.pages = state.pages.filter(page => page.pageId !== action.payload);
      })
      .addCase(renamePage.fulfilled, (state, action) => {
        const { pageId, newTitle } = action.payload;
        const page = state.pages.find(p => p.pageId === pageId);
        if (page) {
          page.title = newTitle;
        }
      });
  },
});

export const { clearError } = pagesSlice.actions;
export default pagesSlice.reducer;

