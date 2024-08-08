import { createSlice, nanoid } from "@reduxjs/toolkit";

interface TeamMember {
  id: string;
  [key: string]: any;
}

interface CartState {
  teamMembers: TeamMember[];
}

const initialState: CartState = {
  teamMembers: [],
};

const teamSlice = createSlice({
  name: "teamProject",
  initialState,
  reducers: {
    addTeam(state, action) {
      state.teamMembers.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    deleteTeam(state, action) {
      state.teamMembers = state.teamMembers.filter(
        (teamMember) => teamMember.id !== action.payload
      );
    },
  },
});

export const { addTeam, deleteTeam } = teamSlice.actions;
export default teamSlice.reducer;
