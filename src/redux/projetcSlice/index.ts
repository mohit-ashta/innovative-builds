import { createSlice, nanoid } from "@reduxjs/toolkit";

interface teamProject {
  id: string;
  [key: string]: any;
}

interface ProjectBuild {
  projetBuild: teamProject[];
}

const initialState: ProjectBuild = {
  projetBuild: [],
};

const projetcSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action) {
      state.projetBuild.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    updateProject(state, action) {
      const { id, updateProject } = action.payload;
      const index = state.projetBuild.findIndex((project) => project.id === id);

      if (index !== -1) {
        state.projetBuild[index] = {
          ...state.projetBuild[index],
          ...updateProject,
        };
      }
    },
    deleteProject(state, action) {
      console.log("Deleting project with id:", action.payload);
      state.projetBuild = state.projetBuild.filter(
        (teamMember) => teamMember.id !== action.payload
      );
    },
  },
});

export const { addProject, deleteProject, updateProject } =
  projetcSlice.actions;
export default projetcSlice.reducer;
