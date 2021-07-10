import { adminProfiles } from "@/modules/core/enums/profiles.enum";

export const getUser = state => state.data;

export const isAdmin = state => {
    return adminProfiles
        .map(profile => profile.id)
        .find(profileId => state.data?.roles?.includes(profileId));
};
