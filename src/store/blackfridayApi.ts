import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHealth: build.query<GetHealthApiResponse, GetHealthApiArg>({
      query: () => ({ url: `/health` }),
    }),
    postAuthLogin: build.mutation<
      PostAuthLoginApiResponse,
      PostAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg.loginDto,
      }),
    }),
    postAuthAccessToken: build.mutation<
      PostAuthAccessTokenApiResponse,
      PostAuthAccessTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/accessToken`,
        method: "POST",
        body: queryArg.tokenDto,
      }),
    }),
    postAuthResetTokenValidate: build.mutation<
      PostAuthResetTokenValidateApiResponse,
      PostAuthResetTokenValidateApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/resetToken/validate`,
        method: "POST",
        body: queryArg.resetTokenDto,
      }),
    }),
    postAuthResetTokenRequest: build.mutation<
      PostAuthResetTokenRequestApiResponse,
      PostAuthResetTokenRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/resetToken/request`,
        method: "POST",
        body: queryArg.emailDto,
      }),
    }),
    putAuthPasswordReset: build.mutation<
      PutAuthPasswordResetApiResponse,
      PutAuthPasswordResetApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password/reset`,
        method: "PUT",
        body: queryArg.resetPasswordDto,
      }),
    }),
    putAuthPasswordUserByUserId: build.mutation<
      PutAuthPasswordUserByUserIdApiResponse,
      PutAuthPasswordUserByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password/user/${queryArg.userId}`,
        method: "PUT",
        body: queryArg.changePasswordDto,
      }),
    }),
    getAuthPasswordResetAll: build.query<
      GetAuthPasswordResetAllApiResponse,
      GetAuthPasswordResetAllApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password/reset/all`,
        params: { token: queryArg.token },
      }),
    }),
    postAuthLogout: build.mutation<
      PostAuthLogoutApiResponse,
      PostAuthLogoutApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/logout`,
        method: "POST",
        body: queryArg.tokenDto,
        headers: { "x-access-token": queryArg["x-access-token"] },
      }),
    }),
    postFilters: build.mutation<PostFiltersApiResponse, PostFiltersApiArg>({
      query: (queryArg) => ({
        url: `/filters`,
        method: "POST",
        body: queryArg.createFilterDto,
      }),
    }),
    getFilters: build.query<GetFiltersApiResponse, GetFiltersApiArg>({
      query: (queryArg) => ({
        url: `/filters`,
        params: {
          promotion: queryArg.promotion,
          merchantFilters: queryArg.merchantFilters,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
          searchQuery: queryArg.searchQuery,
          take: queryArg.take,
          typeIds: queryArg.typeIds,
        },
      }),
    }),
    putFiltersByFilterId: build.mutation<
      PutFiltersByFilterIdApiResponse,
      PutFiltersByFilterIdApiArg
    >({
      query: (queryArg) => ({
        url: `/filters/${queryArg.filterId}`,
        method: "PUT",
        body: queryArg.putFilterDto,
      }),
    }),
    deleteFiltersByFilterId: build.mutation<
      DeleteFiltersByFilterIdApiResponse,
      DeleteFiltersByFilterIdApiArg
    >({
      query: (queryArg) => ({
        url: `/filters/${queryArg.filterId}`,
        method: "DELETE",
      }),
    }),
    getFiltersByFilterId: build.query<
      GetFiltersByFilterIdApiResponse,
      GetFiltersByFilterIdApiArg
    >({
      query: (queryArg) => ({ url: `/filters/${queryArg.filterId}` }),
    }),
    getFiltersExtended: build.query<
      GetFiltersExtendedApiResponse,
      GetFiltersExtendedApiArg
    >({
      query: (queryArg) => ({
        url: `/filters/extended`,
        params: {
          searchQuery: queryArg.searchQuery,
          typeIds: queryArg.typeIds,
          skip: queryArg.skip,
          take: queryArg.take,
        },
      }),
    }),
    getFiltersMerchants: build.query<
      GetFiltersMerchantsApiResponse,
      GetFiltersMerchantsApiArg
    >({
      query: (queryArg) => ({
        url: `/filters/merchants`,
        params: {
          filters: queryArg.filters,
          platformId: queryArg.platformId,
          searchQuery: queryArg.searchQuery,
          take: queryArg.take,
        },
      }),
    }),
    getFiltersTop: build.query<GetFiltersTopApiResponse, GetFiltersTopApiArg>({
      query: (queryArg) => ({
        url: `/filters/top`,
        params: {
          merchantFilters: queryArg.merchantFilters,
          promotion: queryArg.promotion,
          take: queryArg.take,
          typeId: queryArg.typeId,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
        },
      }),
    }),
    getFiltersMerchantsTop: build.query<
      GetFiltersMerchantsTopApiResponse,
      GetFiltersMerchantsTopApiArg
    >({
      query: (queryArg) => ({
        url: `/filters/merchants/top`,
        params: {
          take: queryArg.take,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
        },
      }),
    }),
    getCampaignsMerchantByMerchantId: build.query<
      GetCampaignsMerchantByMerchantIdApiResponse,
      GetCampaignsMerchantByMerchantIdApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/merchant/${queryArg.merchantId}`,
        params: { take: queryArg.take, skip: queryArg.skip },
      }),
    }),
    postCampaigns: build.mutation<
      PostCampaignsApiResponse,
      PostCampaignsApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns`,
        method: "POST",
        body: queryArg.inCampaignDto,
      }),
    }),
    putCampaigns: build.mutation<PutCampaignsApiResponse, PutCampaignsApiArg>({
      query: (queryArg) => ({
        url: `/campaigns`,
        method: "PUT",
        body: queryArg.inCampaignDto,
      }),
    }),
    deleteCampaignsById: build.mutation<
      DeleteCampaignsByIdApiResponse,
      DeleteCampaignsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/campaigns/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    postImages: build.mutation<PostImagesApiResponse, PostImagesApiArg>({
      query: (queryArg) => ({
        url: `/images`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getMerchantsCount: build.query<
      GetMerchantsCountApiResponse,
      GetMerchantsCountApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/count`,
        params: {
          status: queryArg.status,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
        },
      }),
    }),
    getMerchants: build.query<GetMerchantsApiResponse, GetMerchantsApiArg>({
      query: (queryArg) => ({
        url: `/merchants`,
        params: {
          status: queryArg.status,
          filters: queryArg.filters,
          take: queryArg.take,
          skip: queryArg.skip,
          platformId: queryArg.platformId,
        },
      }),
    }),
    postMerchants: build.mutation<
      PostMerchantsApiResponse,
      PostMerchantsApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants`,
        method: "POST",
        body: queryArg.inCreateMerchantDto,
      }),
    }),
    getMerchantsBulk: build.query<
      GetMerchantsBulkApiResponse,
      GetMerchantsBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/bulk`,
        params: { ids: queryArg.ids, platformId: queryArg.platformId },
      }),
    }),
    getMerchantsExtended: build.query<
      GetMerchantsExtendedApiResponse,
      GetMerchantsExtendedApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/extended`,
        params: {
          searchQuery: queryArg.searchQuery,
          editFilter: queryArg.editFilter,
          approved: queryArg.approved,
          live: queryArg.live,
          platformId: queryArg.platformId,
          take: queryArg.take,
          skip: queryArg.skip,
        },
      }),
    }),
    getMerchantsByMerchantId: build.query<
      GetMerchantsByMerchantIdApiResponse,
      GetMerchantsByMerchantIdApiArg
    >({
      query: (queryArg) => ({ url: `/merchants/${queryArg.merchantId}` }),
    }),
    putMerchantsByMerchantId: build.mutation<
      PutMerchantsByMerchantIdApiResponse,
      PutMerchantsByMerchantIdApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/${queryArg.merchantId}`,
        method: "PUT",
        body: queryArg.inDetailedMerchantDto,
      }),
    }),
    deleteMerchantsByMerchantId: build.mutation<
      DeleteMerchantsByMerchantIdApiResponse,
      DeleteMerchantsByMerchantIdApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/${queryArg.merchantId}`,
        method: "DELETE",
      }),
    }),
    getMerchantsSlugByMerchantSlug: build.query<
      GetMerchantsSlugByMerchantSlugApiResponse,
      GetMerchantsSlugByMerchantSlugApiArg
    >({
      query: (queryArg) => ({
        url: `/merchants/slug/${queryArg.merchantSlug}`,
        params: { platformId: queryArg.platformId },
      }),
    }),
    getBanners: build.query<GetBannersApiResponse, GetBannersApiArg>({
      query: (queryArg) => ({
        url: `/banners`,
        params: {
          returnDefault: queryArg.returnDefault,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
        },
      }),
    }),
    postBanners: build.mutation<PostBannersApiResponse, PostBannersApiArg>({
      query: (queryArg) => ({
        url: `/banners`,
        method: "POST",
        body: queryArg.createBannerDto,
      }),
    }),
    getBannersExtended: build.query<
      GetBannersExtendedApiResponse,
      GetBannersExtendedApiArg
    >({
      query: (queryArg) => ({
        url: `/banners/extended`,
        params: {
          status: queryArg.status,
          searchQuery: queryArg.searchQuery,
          platformId: queryArg.platformId,
          take: queryArg.take,
          skip: queryArg.skip,
          live: queryArg.live,
        },
      }),
    }),
    putBannersByBannerId: build.mutation<
      PutBannersByBannerIdApiResponse,
      PutBannersByBannerIdApiArg
    >({
      query: (queryArg) => ({
        url: `/banners/${queryArg.bannerId}`,
        method: "PUT",
        body: queryArg.putBannerDto,
      }),
    }),
    deleteBannersByBannerId: build.mutation<
      DeleteBannersByBannerIdApiResponse,
      DeleteBannersByBannerIdApiArg
    >({
      query: (queryArg) => ({
        url: `/banners/${queryArg.bannerId}`,
        method: "DELETE",
      }),
    }),
    getBannersByBannerId: build.query<
      GetBannersByBannerIdApiResponse,
      GetBannersByBannerIdApiArg
    >({
      query: (queryArg) => ({ url: `/banners/${queryArg.bannerId}` }),
    }),
    getBannersSlugByBannerSlug: build.query<
      GetBannersSlugByBannerSlugApiResponse,
      GetBannersSlugByBannerSlugApiArg
    >({
      query: (queryArg) => ({ url: `/banners/slug/${queryArg.bannerSlug}` }),
    }),
    getSearch: build.query<GetSearchApiResponse, GetSearchApiArg>({
      query: (queryArg) => ({
        url: `/search`,
        params: {
          take: queryArg.take,
          skip: queryArg.skip,
          platformId: queryArg.platformId,
          modules: queryArg.modules,
          searchText: queryArg.searchText,
        },
      }),
    }),
    getDealsCount: build.query<GetDealsCountApiResponse, GetDealsCountApiArg>({
      query: (queryArg) => ({
        url: `/deals/count`,
        params: {
          merchantFilters: queryArg.merchantFilters,
          filters: queryArg.filters,
          platformId: queryArg.platformId,
        },
      }),
    }),
    postDeals: build.mutation<PostDealsApiResponse, PostDealsApiArg>({
      query: (queryArg) => ({
        url: `/deals`,
        method: "POST",
        body: queryArg.createDealDto,
      }),
    }),
    getDeals: build.query<GetDealsApiResponse, GetDealsApiArg>({
      query: (queryArg) => ({
        url: `/deals`,
        params: {
          orderByDirection: queryArg.orderByDirection,
          orderBy: queryArg.orderBy,
          merchantFilters: queryArg.merchantFilters,
          searchQuery: queryArg.searchQuery,
          filters: queryArg.filters,
          sponsored: queryArg.sponsored,
          platformId: queryArg.platformId,
          take: queryArg.take,
          skip: queryArg.skip,
        },
      }),
    }),
    putDealsByDealId: build.mutation<
      PutDealsByDealIdApiResponse,
      PutDealsByDealIdApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/${queryArg.dealId}`,
        method: "PUT",
        body: queryArg.inDealDto,
      }),
    }),
    deleteDealsByDealId: build.mutation<
      DeleteDealsByDealIdApiResponse,
      DeleteDealsByDealIdApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/${queryArg.dealId}`,
        method: "DELETE",
      }),
    }),
    getDealsByDealId: build.query<
      GetDealsByDealIdApiResponse,
      GetDealsByDealIdApiArg
    >({
      query: (queryArg) => ({ url: `/deals/${queryArg.dealId}` }),
    }),
    patchDealsBulk: build.mutation<
      PatchDealsBulkApiResponse,
      PatchDealsBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/bulk`,
        method: "PATCH",
        body: queryArg.dealArrayDto,
      }),
    }),
    deleteDealsBulk: build.mutation<
      DeleteDealsBulkApiResponse,
      DeleteDealsBulkApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/bulk`,
        method: "DELETE",
        params: { dealIds: queryArg.dealIds },
      }),
    }),
    getDealsBulk: build.query<GetDealsBulkApiResponse, GetDealsBulkApiArg>({
      query: (queryArg) => ({
        url: `/deals/bulk`,
        params: { platformId: queryArg.platformId, ids: queryArg.ids },
      }),
    }),
    getDealsMerchants: build.query<
      GetDealsMerchantsApiResponse,
      GetDealsMerchantsApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/merchants`,
        params: {
          searchQuery: queryArg.searchQuery,
          dealIds: queryArg.dealIds,
          platformId: queryArg.platformId,
          take: queryArg.take,
        },
      }),
    }),
    getDealsExtended: build.query<
      GetDealsExtendedApiResponse,
      GetDealsExtendedApiArg
    >({
      query: (queryArg) => ({
        url: `/deals/extended`,
        params: {
          merchantFilters: queryArg.merchantFilters,
          searchQuery: queryArg.searchQuery,
          filters: queryArg.filters,
          createdBy: queryArg.createdBy,
          platformId: queryArg.platformId,
          isLive: queryArg.isLive,
          take: queryArg.take,
          skip: queryArg.skip,
          sponsored: queryArg.sponsored,
        },
      }),
    }),
    getUsersExtended: build.query<
      GetUsersExtendedApiResponse,
      GetUsersExtendedApiArg
    >({
      query: (queryArg) => ({
        url: `/users/extended`,
        params: {
          searchQuery: queryArg.searchQuery,
          role: queryArg.role,
          skip: queryArg.skip,
          take: queryArg.take,
        },
      }),
    }),
    getUsersByUserId: build.query<
      GetUsersByUserIdApiResponse,
      GetUsersByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
    putUsersByUserId: build.mutation<
      PutUsersByUserIdApiResponse,
      PutUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}`,
        method: "PUT",
        body: queryArg.inUserDto,
      }),
    }),
    deleteUsersByUserId: build.mutation<
      DeleteUsersByUserIdApiResponse,
      DeleteUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}`,
        method: "DELETE",
      }),
    }),
    patchUsersByUserIdEmail: build.mutation<
      PatchUsersByUserIdEmailApiResponse,
      PatchUsersByUserIdEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}/email`,
        method: "PATCH",
        body: queryArg.userEmailDto,
      }),
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.inUserDto,
      }),
    }),
    getFilterTypes: build.query<
      GetFilterTypesApiResponse,
      GetFilterTypesApiArg
    >({
      query: () => ({ url: `/filterTypes` }),
    }),
    getSitemaps: build.query<GetSitemapsApiResponse, GetSitemapsApiArg>({
      query: (queryArg) => ({
        url: `/sitemaps`,
        params: { platformId: queryArg.platformId },
      }),
    }),
    getPlatforms: build.query<GetPlatformsApiResponse, GetPlatformsApiArg>({
      query: (queryArg) => ({
        url: `/platforms`,
        params: { platformId: queryArg.platformId },
      }),
    }),
    putPlatformsByPlatformId: build.mutation<
      PutPlatformsByPlatformIdApiResponse,
      PutPlatformsByPlatformIdApiArg
    >({
      query: (queryArg) => ({
        url: `/platforms/${queryArg.platformId}`,
        method: "PUT",
        body: queryArg.platformDto,
      }),
    }),
    postNewslettersSubscribe: build.mutation<
      PostNewslettersSubscribeApiResponse,
      PostNewslettersSubscribeApiArg
    >({
      query: (queryArg) => ({
        url: `/newsletters/subscribe`,
        method: "POST",
        body: queryArg.subscriberDto,
        headers: { "x-recaptcha-token": queryArg["x-recaptcha-token"] },
        params: { platformId: queryArg.platformId },
      }),
    }),
    getFeedback: build.query<GetFeedbackApiResponse, GetFeedbackApiArg>({
      query: (queryArg) => ({ url: `/feedback` }),
    }),
    postTracker: build.mutation<PostTrackerApiResponse, PostTrackerApiArg>({
      query: (queryArg) => ({
        url: `/tracker`,
        method: "POST",
        body: queryArg.trackerUrlDto,
      }),
    }),
    postScoreUpdate: build.mutation<
      PostScoreUpdateApiResponse,
      PostScoreUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/score/update`,
        method: "POST",
        body: queryArg.scoreUpdateActionArrayDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as blackfridayApi };
export type GetHealthApiResponse = unknown;
export type GetHealthApiArg = void;
export type PostAuthLoginApiResponse =
  /** status 200 Authentication is succeeded and both tokens are returned */ TokenDto;
export type PostAuthLoginApiArg = {
  loginDto: LoginDto;
};
export type PostAuthAccessTokenApiResponse =
  /** status 200 Receive a newly created accessToken expires in one hour */ TokenDto;
export type PostAuthAccessTokenApiArg = {
  tokenDto: TokenDto;
};
export type PostAuthResetTokenValidateApiResponse = unknown;
export type PostAuthResetTokenValidateApiArg = {
  resetTokenDto: ResetTokenDto;
};
export type PostAuthResetTokenRequestApiResponse = unknown;
export type PostAuthResetTokenRequestApiArg = {
  emailDto: EmailDto;
};
export type PutAuthPasswordResetApiResponse = unknown;
export type PutAuthPasswordResetApiArg = {
  resetPasswordDto: ResetPasswordDto;
};
export type PutAuthPasswordUserByUserIdApiResponse = unknown;
export type PutAuthPasswordUserByUserIdApiArg = {
  /** Required value to change the password of the user. */
  userId: number;
  changePasswordDto: ChangePasswordDto;
};
export type GetAuthPasswordResetAllApiResponse = unknown;
export type GetAuthPasswordResetAllApiArg = {
  /** Special token to authenticate the requester */
  token: string;
};
export type PostAuthLogoutApiResponse =
  /** status 200 Tokens have been removed */ boolean;
export type PostAuthLogoutApiArg = {
  /** AccessToken to authenticate the request */
  "x-access-token": string;
  tokenDto: TokenDto;
};
export type PostFiltersApiResponse =
  /** status 200 Single Filter object is returned */ OutFilterDto;
export type PostFiltersApiArg = {
  createFilterDto: CreateFilterDto;
};
export type GetFiltersApiResponse =
  /** status 200 Paginated array of filters filtered by the provided parameters */ FilterResponseDto;
export type GetFiltersApiArg = {
  /** Required to get results for merchants or deals. Please pass promotion=deals or promotions=merchants. When this query param is passed, platformId is also mandatory and vice versa */
  promotion?: string;
  /** String of merchant ids divided by ; delimiter. EG: 12;15;33;99 */
  merchantFilters?: string;
  /** String of filter ids divided by ; delimiter. For example: 1;3;2;5;6 */
  filters?: string;
  /** Provide platformId for platform specific results */
  platformId?: number;
  /** Name or piece of a name from a filter */
  searchQuery: string;
  /** Amount of results that are returned. This cannot exceed 100. */
  take: number;
  /** String of typeIds for the filters to retrieve. EG: 1;2;3 */
  typeIds: string;
};
export type PutFiltersByFilterIdApiResponse =
  /** status 200 Single Filter object is returned */ OutFilterDto;
export type PutFiltersByFilterIdApiArg = {
  /** Required value to put a specific filter. */
  filterId: number;
  putFilterDto: PutFilterDto;
};
export type DeleteFiltersByFilterIdApiResponse =
  /** status 200 True is returned on success */ boolean;
export type DeleteFiltersByFilterIdApiArg = {
  /** Required value to delete a specific filter. */
  filterId: number;
};
export type GetFiltersByFilterIdApiResponse =
  /** status 200 Single Filter object is returned */ OutFilterDto;
export type GetFiltersByFilterIdApiArg = {
  /** Required value to get a specific filter. */
  filterId: number;
};
export type GetFiltersExtendedApiResponse =
  /** status 200 Paginated array of filters filtered by the provided parameters */ FilterListResponseDto;
export type GetFiltersExtendedApiArg = {
  /** Name or piece of a name from a filter */
  searchQuery?: string;
  /** String of typeIds for the filters to retrieve. EG: 1;2;3 */
  typeIds?: string;
  /** Amount of results that need to be skipped. */
  skip: number;
  /** Amount of results that are returned. This cannot exceed 100. */
  take: number;
};
export type GetFiltersMerchantsApiResponse =
  /** status 200 Paginated array of filters filtered by the provided parameters */ FilterResponseDto;
export type GetFiltersMerchantsApiArg = {
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** Provide platformId for platform specific results */
  platformId?: number;
  /** Name or piece of a name from a filter */
  searchQuery?: string;
  /** Amount of results that are returned. This cannot exceed 100. */
  take: number;
};
export type GetFiltersTopApiResponse = /** status 200
            Array sorted by usage by merchants and filtered by filter type
         */ OutFilterDto[];
export type GetFiltersTopApiArg = {
  /** String of merchant ids divided by ; delimiter. EG: 12;15;33;99 */
  merchantFilters?: string;
  /** Required to get top filter results for merchants or deals. Please pass promotion=deals or promotions=merchants. */
  promotion: string;
  /** Amount of items that are returned */
  take: number;
  /** TypeId for the filters to retrieve */
  typeId: number;
  /** String of filters separated by a ";" delimiter. EG: 1;2;3;5 */
  filters?: string;
  /** platformId is mandatory to get the correct merchants */
  platformId: number;
};
export type GetFiltersMerchantsTopApiResponse =
  /** status 200 Array sorted by usage by merchants and filtered by filter type */ OutFilterDto[];
export type GetFiltersMerchantsTopApiArg = {
  /** Amount of items that are returned */
  take: number;
  /** String of filters separated by a ";" delimiter. EG: 1;2;3;5 */
  filters?: string;
  /** platformId is mandatory to get the correct merchants */
  platformId: number;
};
export type GetCampaignsMerchantByMerchantIdApiResponse =
  /** status 200 Optional paginated array of Campaigns for a given Merchant */ CampaignResponseDto[];
export type GetCampaignsMerchantByMerchantIdApiArg = {
  /** Amount of items that are returned */
  take?: number;
  /** Amount of items that are skipped */
  skip?: number;
  /** Required value to get campaigns for a specific merchant. */
  merchantId: number;
};
export type PostCampaignsApiResponse =
  /** status 200 Single Campaign object is returned */ OutCampaignDto;
export type PostCampaignsApiArg = {
  inCampaignDto: InCampaignDto;
};
export type PutCampaignsApiResponse =
  /** status 200 Single Campaign object is returned */ OutCampaignDto;
export type PutCampaignsApiArg = {
  inCampaignDto: InCampaignDto;
};
export type DeleteCampaignsByIdApiResponse =
  /** status 200 When delete has been succesfull it will return true */ boolean;
export type DeleteCampaignsByIdApiArg = {
  /** Required value to delete a specific campaign. */
  id: number;
};
export type PostImagesApiResponse =
  /** status 200 Image upload using multipart/form-data. Form data:form should look like this:KEY                     VALUEfile                    (binary file)Returned is the imageId (database) and the url */ ImageDto;
export type PostImagesApiArg = {
  body: {
    file: Blob;
  };
};
export type GetMerchantsCountApiResponse =
  /** status 200 We returns the total amount of Merchants for a given platform */ number;
export type GetMerchantsCountApiArg = {
  /** Filter with this param on the durationStatus of a merchant's campaign */
  status?: "ABOUT_TO_START" | "ONGOING" | "ABOUT_TO_EXPIRE" | "EXPIRED";
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** Mandatory to get the platform specific count */
  platformId: number;
};
export type GetMerchantsApiResponse = /** status 200
            Paginated array of merchants sorted based upon the buyInPosition and score in DESC order
            All merchants in the response of this endpoint have inOverview true
            All merchants are connected to the filters submitted with the request
            The filter logic is AND for filters with a different type and OR for filters
            with the same type.
            Example:
                Filters: Computers, Mobile (both type: category)
                    -> Respond with all merchants connected to computers OR mobiles
                Filters: Computers, Apple, Dell (type: category and brand)
                    -> Respond with all merchants connected with computers AND Apple OR Dell
         */ MerchantListResponseDto;
export type GetMerchantsApiArg = {
  /** Filter with this param on the durationStatus of a merchant's campaign */
  status?: "ABOUT_TO_START" | "ONGOING" | "ABOUT_TO_EXPIRE" | "EXPIRED";
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
  /** Mandatory to get the platform specific results */
  platformId: number;
};
export type PostMerchantsApiResponse =
  /** status 200 Single Merchant object is returned */ OutDetailedMerchantDto;
export type PostMerchantsApiArg = {
  inCreateMerchantDto: InCreateMerchantDto;
};
export type GetMerchantsBulkApiResponse = /** status 200
            Returns a list of merchants with the given ids
         */ MerchantListResponseDto;
export type GetMerchantsBulkApiArg = {
  /** Merchant ids to get info of multiple merchants */
  ids?: string;
  /** Mandatory to get the platform specific results */
  platformId: number;
};
export type GetMerchantsExtendedApiResponse =
  /** status 200 Paginated array of merchants sorted by lastEdit timestamp. */ MerchantListResponseDto;
export type GetMerchantsExtendedApiArg = {
  /** Optional param to search on merchant's name */
  searchQuery?: string;
  /** Filter merchants on last edit status. EG: merchant or approved */
  editFilter?: "approved" | "merchant";
  /** Mandatory if you want to see merchants that are approved. EG: approved=true or approved=false.When not give, both are returned */
  approved?: string;
  /** Mandatory if you want to see merchants that are live. EG: live=true or live=false.When not give, both are returned */
  live?: string;
  /** Mandatory to get the platform specific results. When not given, all merchants are returned */
  platformId?: number;
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
};
export type GetMerchantsByMerchantIdApiResponse =
  /** status 200 Single Merchant object is returned */ OutDetailedMerchantDto;
export type GetMerchantsByMerchantIdApiArg = {
  /** Required value to get a specific merchant. This API can only be used be the admin part.When a merchant has a "shadow" copy a.k.a child, the shadow copy is returned */
  merchantId: number;
};
export type PutMerchantsByMerchantIdApiResponse =
  /** status 200 Single Merchant object is returned */ OutDetailedMerchantDto;
export type PutMerchantsByMerchantIdApiArg = {
  /** Required value to update a specific merchant. */
  merchantId: number;
  inDetailedMerchantDto: InDetailedMerchantDto;
};
export type DeleteMerchantsByMerchantIdApiResponse =
  /** status 200 True for when the merchant and all the relations have been deleted */ boolean;
export type DeleteMerchantsByMerchantIdApiArg = {
  /** Required value to delete a specific merchant. */
  merchantId: number;
};
export type GetMerchantsSlugByMerchantSlugApiResponse =
  /** status 200 Single Merchant object is returned */ OutDetailedMerchantDto;
export type GetMerchantsSlugByMerchantSlugApiArg = {
  /** Mandatory to get the platform specific merchant */
  platformId: number;
  /** Required value to get a specific merchant. */
  merchantSlug: string;
};
export type GetBannersApiResponse = /** status 200
            Paginated array of banners
            All banners are connected to the filters submitted with the request
            The filter logic is AND for filters with a different type and OR for filters
            with the same type.
            Example:
                Filters: Computers, Mobile (both type: category)
                    -> Respond with all banners connected to computers OR mobiles
                Filters: Computers, Apple, Dell (type: category and brand)
                    -> Respond with all banners connected with computers AND Apple OR Dell
         */ OutBannerDto[];
export type GetBannersApiArg = {
  /** When no results are found based on the given filters, we return banners based on no filter. When not given, it defaults to false. */
  returnDefault?: boolean;
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** PlatformId to get the platform specific banners */
  platformId: number;
};
export type PostBannersApiResponse =
  /** status 200 Single Banner object is returned */ OutBannerDto;
export type PostBannersApiArg = {
  createBannerDto: CreateBannerDto;
};
export type GetBannersExtendedApiResponse = /** status 200
            Paginated array of banners
            All banners are connected to the filters submitted with the request
            The filter logic is AND for filters with a different type and OR for filters
            with the same type.
            Example:
                Filters: Computers, Mobile (both type: category)
                    -> Respond with all banners connected to computers OR mobiles
                Filters: Computers, Apple, Dell (type: category and brand)
                    -> Respond with all banners connected with computers AND Apple OR Dell
         */ BannerListResponseDto;
export type GetBannersExtendedApiArg = {
  /** Filter with this param on the status of a banner. */
  status?: "VISIBLE" | "INVISIBLE" | "ALMOST_VISIBLE";
  /** Optional param to search on the name of a banner */
  searchQuery?: string;
  /** PlatformId to get the platform specific banners */
  platformId?: number;
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
  /** Pass true of false, whether the results should include live or offline banners. By default the API returns both (offline & live). */
  live?: boolean;
};
export type PutBannersByBannerIdApiResponse =
  /** status 200 Single Banner object is returned */ OutBannerDto;
export type PutBannersByBannerIdApiArg = {
  /** Required value to update a specific banner */
  bannerId: number;
  putBannerDto: PutBannerDto;
};
export type DeleteBannersByBannerIdApiResponse =
  /** status 200 We return true when banner has been deleted */ boolean;
export type DeleteBannersByBannerIdApiArg = {
  /** Required value to get a specific banner */
  bannerId: number;
};
export type GetBannersByBannerIdApiResponse =
  /** status 200 Single Banner object is returned */ OutBannerDto;
export type GetBannersByBannerIdApiArg = {
  /** Required value to get a specific banner. */
  bannerId: number;
};
export type GetBannersSlugByBannerSlugApiResponse =
  /** status 200 Single Banner object is returned */ OutBannerDto;
export type GetBannersSlugByBannerSlugApiArg = {
  /** Required value to get a specific banner. */
  bannerSlug: string;
};
export type GetSearchApiResponse =
  /** status 200 An search object is returned, consisting of the search results. All search options are always returned, but not necessarily populated. EG search query:/search?modules=merchants&searchText=Samsung&take=5&skip=0 only the merchants array is populated (if there are results) */ SearchResponseDto;
export type GetSearchApiArg = {
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
  /** Mandatory to get the platform specific results */
  platformId: number;
  /** Modules to search in, dot comma (;) separated. EG: ?modules=merchant:dealsWhen not provided, we search in all configured & searchable modules. */
  modules?: string;
  /** Search input */
  searchText: string;
};
export type GetDealsCountApiResponse =
  /** status 200 We returns the total amount of Deals for a given platform */ number;
export type GetDealsCountApiArg = {
  /** String of merchant ids divided by ; characters. For example: 1;3;2;5;6 */
  merchantFilters?: string;
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** Mandatory to get the platform specific count */
  platformId: number;
};
export type PostDealsApiResponse =
  /** status 200 Single Deal object is returned */ OutDealDto;
export type PostDealsApiArg = {
  createDealDto: CreateDealDto;
};
export type GetDealsApiResponse = /** status 200
            Paginated array of deals
            All deals are connected to the filters submitted with the request
            The filter logic is AND for filters with a different type and OR for filters
            with the same type.
            Example:
                Filters: Computers, Mobile (both type: category)
                    -> Respond with all deals connected to computers OR mobiles
                Filters: Computers, Apple, Dell (type: category and brand)
                    -> Respond with all deals connected with computers AND Apple OR Dell
         */ DealsListResponseDto;
export type GetDealsApiArg = {
  /** Either ASC or DESC to determine the sort order (required when using orderBy query param) */
  orderByDirection?: string;
  /** Options to order by: newlyAdded, popular, price or lastUpdated or discount */
  orderBy?: string;
  /** String of merchant ids divided by ; characters. For example: 1;3;2;5;6 */
  merchantFilters?: string;
  /** Optional param to search on the name of a deal */
  searchQuery?: string;
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** Optional param to explicitly get sponsored deals or not. Provide 1 when you only want sponsored deals. Provide 0 when you only want non-sponsored deals. When nothing is given, you'll get both */
  sponsored?: number;
  /** Mandatory to get the platform specific results */
  platformId?: number;
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
};
export type PutDealsByDealIdApiResponse =
  /** status 200 Single Deal object is returned */ OutDealDto;
export type PutDealsByDealIdApiArg = {
  /** Required value to get a specific deal */
  dealId: number;
  inDealDto: InDealDto;
};
export type DeleteDealsByDealIdApiResponse =
  /** status 200 We return true when deal has been deleted */ boolean;
export type DeleteDealsByDealIdApiArg = {
  /** Required value to get a specific deal */
  dealId: number;
};
export type GetDealsByDealIdApiResponse =
  /** status 200 Single Deal object is returned */ OutDealDto;
export type GetDealsByDealIdApiArg = {
  /** Required value to get a specific deal */
  dealId: number;
};
export type PatchDealsBulkApiResponse = unknown;
export type PatchDealsBulkApiArg = {
  dealArrayDto: DealArrayDto;
};
export type DeleteDealsBulkApiResponse = unknown;
export type DeleteDealsBulkApiArg = {
  /** String of deal ids divided by ; characters. For example: 1;3;2;5;6 This is needed to delete multiple deals */
  dealIds: string;
};
export type GetDealsBulkApiResponse = /** status 200
            Returns a list of deals with the given ids
         */ DealsListResponseDto;
export type GetDealsBulkApiArg = {
  /** Mandatory to get the platform specific results */
  platformId: number;
  /** Deals ids to get info of multiple deals */
  ids: string;
};
export type GetDealsMerchantsApiResponse =
  /** status 200 Array of merchants (with deal usage) */ DealMerchantsResponseDto;
export type GetDealsMerchantsApiArg = {
  /** Pass a string to search for merchants */
  searchQuery?: string;
  /** String of deal ids divided by ; characters. For example: 1;3;2;5;6 This is needed to get merchant results of the given deals */
  dealIds?: string;
  /** Mandatory to get the platform specific results */
  platformId?: number;
  /** Amount of items that are returned */
  take?: number;
};
export type GetDealsExtendedApiResponse = /** status 200
            Paginated array of deals
            All deals are connected to the filters submitted with the request
            The filter logic is AND for filters with a different type and OR for filters
            with the same type.
            Example:
                Filters: Computers, Mobile (both type: category)
                    -> Respond with all deals connected to computers OR mobiles
                Filters: Computers, Apple, Dell (type: category and brand)
                    -> Respond with all deals connected with computers AND Apple OR Dell
         */ DealsListResponseDto;
export type GetDealsExtendedApiArg = {
  /** String of merchant ids divided by ; characters. For example: 1;3;2;5;6 */
  merchantFilters?: string;
  /** Optional param to search on the name of a deal */
  searchQuery?: string;
  /** String of filter ids divided by ; characters. For example: 1;3;2;5;6 */
  filters?: string;
  /** This returns results that either are created by the API or another way. When not given it returns everything.EG: ?createdBy=API or ?createdBy=DASHBOARD */
  createdBy?: "API" | "DASHBOARD" | "UNKNOWN";
  /** Mandatory to get the platform specific results */
  platformId?: number;
  /** This returns results that either are live or not. When not given it returns both.EG: ?isLive=true or ?isLive=false */
  isLive?: string;
  /** Amount of items that are returned */
  take: number;
  /** Amount of items that are skipped */
  skip: number;
  /** Optional param to explicitly get sponsored deals or not. Provide 1 when you only want sponsored deals. Provide 0 when you only want non-sponsored deals. When nothing is given, you'll get both */
  sponsored?: number;
};
export type GetUsersExtendedApiResponse =
  /** status 200 Paginated array of users filtered by the provided parameters */ UserListResponseDto;
export type GetUsersExtendedApiArg = {
  /** This searches on name, email and/or company */
  searchQuery?: string;
  /** When given, the result is filtered with the given value. */
  role?: string;
  /** Amount of results that need to be skipped. */
  skip: number;
  /** Amount of results that are returned. This cannot exceed 100. */
  take: number;
};
export type GetUsersByUserIdApiResponse = /** status 200  */ OutDetailUserDto;
export type GetUsersByUserIdApiArg = {
  /** Required value to get a specific user. */
  userId: number;
};
export type PutUsersByUserIdApiResponse = /** status 200  */ OutDetailUserDto;
export type PutUsersByUserIdApiArg = {
  /** Required value to get a specific user. */
  userId: number;
  inUserDto: InUserDto;
};
export type DeleteUsersByUserIdApiResponse = /** status 200  */ boolean;
export type DeleteUsersByUserIdApiArg = {
  /** Required value to get a specific user. */
  userId: number;
};
export type PatchUsersByUserIdEmailApiResponse =
  /** status 200 True when action was successful */ boolean;
export type PatchUsersByUserIdEmailApiArg = {
  /** Required value to get a specific user. */
  userId: number;
  userEmailDto: UserEmailDto;
};
export type PostUsersApiResponse =
  /** status 200 Single User object is returned */ OutUserDto;
export type PostUsersApiArg = {
  inUserDto: InUserDto;
};
export type GetFilterTypesApiResponse =
  /** status 200 Array of FilterTypes */ FilterTypeDto[];
export type GetFilterTypesApiArg = void;
export type GetSitemapsApiResponse = unknown;
export type GetSitemapsApiArg = {
  /** PlatformId to get the sitemap for that platform */
  platformId: number;
};
export type GetPlatformsApiResponse =
  /** status 200 PlatformDTO with info of the platform */ PlatformDto;
export type GetPlatformsApiArg = {
  /** Mandatory to get the platform specific results */
  platformId: number;
};
export type PutPlatformsByPlatformIdApiResponse = unknown;
export type PutPlatformsByPlatformIdApiArg = {
  platformId: number;
  platformDto: PlatformDto;
};
export type PostNewslettersSubscribeApiResponse = unknown;
export type PostNewslettersSubscribeApiArg = {
  /** PlatformId to get the platform specific banners */
  platformId: number;
  /** Recaptcha client token to validate the request against recaptcha */
  "x-recaptcha-token": string;
  subscriberDto: SubscriberDto;
};
export type GetFeedbackApiResponse =
  /** status 200 Optional paginated array of Campaigns for a given Merchant */ FeedbackDto;
export type GetFeedbackApiArg = {
  /** Required value to get avg feedback rating for a specific platform. */
  platformId: number;
};
export type PostTrackerApiResponse =
  /** status 200 Returns the redirect url from we can track */ TrackerUrlDto;
export type PostTrackerApiArg = {
  trackerUrlDto: TrackerUrlDto;
};
export type PostScoreUpdateApiResponse = unknown;
export type PostScoreUpdateApiArg = {
  scoreUpdateActionArrayDto: ScoreUpdateActionArrayDto;
};
export type TokenDto = {
  refreshToken: string;
  accessToken?: string;
  resetToken?: string;
};
export type LoginDto = {
  email: string;
  password: string;
  resetToken?: string;
};
export type ResetTokenDto = {
  resetToken: string;
};
export type EmailDto = {
  email: string;
};
export type ResetPasswordDto = {
  password: string;
  resetToken: string;
};
export type ChangePasswordDto = {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
};
export type FilterTypeDto = {
  id: number;
  name: string;
};
export type FilterLabelDto = {
  id: number;
  colorHex: string;
  icon: string;
  showText: boolean;
};
export type OutFilterDto = {
  name: string;
  type: FilterTypeDto;
  label?: FilterLabelDto;
  usageByMerchant?: number;
  usageByDeals?: number;
  id: number;
};
export type CreateFilterDto = {
  name: string;
  type: FilterTypeDto;
  label?: FilterLabelDto;
  usageByMerchant?: number;
  usageByDeals?: number;
};
export type FilterResponseDto = {
  filters?: OutFilterDto[];
};
export type PutFilterDto = {
  name: string;
  type: FilterTypeDto;
  label?: FilterLabelDto;
  usageByMerchant?: number;
  usageByDeals?: number;
  id: number;
};
export type FilterListResponseDto = {
  total: number;
  filters?: PutFilterDto[];
};
export type CampaignDurationStatusDto = {
  percentage: number | null;
  name: string;
  startInAmountOfDays: number;
};
export type CampaignDto = {
  id: number;
  name: string;
  isFeatured: boolean;
  excerpt?: string;
  subtitle?: string;
  description?: string;
  couponCode?: string;
  startDate?: string;
  endDate?: string;
  startDateStatusShow?: string;
  startDatePublish?: string;
  durationStatus?: CampaignDurationStatusDto;
  url?: string;
  trackingUrl?: string;
  usps?: string[];
};
export type CampaignResponseDto = {
  total: number;
  campaigns?: CampaignDto[];
};
export type CampaignStatusDto = {
  email: string;
  firstName: string;
  lastName: string;
};
export type OutCampaignDto = {
  id: number;
  name: string;
  isFeatured: boolean;
  excerpt?: string;
  subtitle?: string;
  description?: string;
  couponCode?: string;
  startDate?: string;
  endDate?: string;
  startDateStatusShow?: string;
  startDatePublish?: string;
  durationStatus?: CampaignDurationStatusDto;
  url?: string;
  trackingUrl?: string;
  usps?: string[];
  featuredFilter?: OutFilterDto;
  isFeaturedFilterActive?: boolean;
  editedBy?: CampaignStatusDto;
};
export type GenericIdDto = {
  id: number;
};
export type InCampaignDto = {
  id: number;
  name: string;
  isFeatured: boolean;
  excerpt?: string;
  subtitle?: string;
  description?: string;
  couponCode?: string;
  startDate?: string;
  endDate?: string;
  startDateStatusShow?: string;
  startDatePublish?: string;
  durationStatus?: CampaignDurationStatusDto;
  url?: string;
  trackingUrl?: string;
  usps?: string[];
  merchantId: number;
  featuredFilter?: GenericIdDto;
  isFeaturedFilterActive?: boolean;
};
export type ImageDto = {
  id: number;
  title?: string;
  alt?: string;
  url: string;
};
export type PlatformDto = {
  id: number;
  name: string;
  googleExperimentId: string;
  wctPlatformId: number;
  googleOptimizeId?: string;
  headerText?: string;
  navBarTitle?: string;
  navBarSubTitle?: string;
  navBarLink?: string;
  mailchimpApiKey?: string;
  mailchimpAudienceId?: string;
  merchantPrefix?: string;
};
export type SeoDto = {
  title?: string;
  description?: string;
  pageText?: string;
  alternateHTML?: string;
  jsonSchema?: string;
};
export type OutMerchantDto = {
  id: number;
  live?: boolean;
  platform: PlatformDto;
  features?: string;
  buyInPosition?: number | null;
  eCPC?: number;
  approvalRate?: number;
  score?: number;
  url?: string;
  trackingUrl?: string;
  inOverview?: boolean;
  headerImage?: ImageDto;
  logoImage?: ImageDto;
  seo?: SeoDto;
  lastEdit?: string;
  approved?: boolean;
  name: string;
  slug: string;
  updatedAt?: string;
  updatedAtByUser?: string;
  categories?: OutFilterDto[];
  campaigns?: OutCampaignDto[];
};
export type MerchantListResponseDto = {
  total: number;
  merchants?: OutMerchantDto[];
};
export type OutDetailedMerchantDto = {
  id: number;
  live?: boolean;
  platform: PlatformDto;
  features?: string;
  buyInPosition?: number | null;
  eCPC?: number;
  approvalRate?: number;
  score?: number;
  url?: string;
  trackingUrl?: string;
  inOverview?: boolean;
  headerImage?: ImageDto;
  logoImage?: ImageDto;
  seo?: SeoDto;
  lastEdit?: string;
  approved?: boolean;
  name: string;
  slug: string;
  updatedAt?: string;
  updatedAtByUser?: string;
  categories?: OutFilterDto[];
  campaigns?: OutCampaignDto[];
  filters?: OutFilterDto[];
};
export type InCreateMerchantDto = {
  name: string;
  platform: PlatformDto;
};
export type InDetailedMerchantDto = {
  id: number;
  live?: boolean;
  platform: PlatformDto;
  features?: string;
  buyInPosition?: number | null;
  eCPC?: number;
  approvalRate?: number;
  score?: number;
  url?: string;
  trackingUrl?: string;
  inOverview?: boolean;
  headerImage?: ImageDto;
  logoImage?: ImageDto;
  seo?: SeoDto;
  lastEdit?: string;
  approved?: boolean;
  editedBy?: GenericIdDto;
  name: string;
  campaigns?: InCampaignDto[];
  filters?: GenericIdDto[];
  categories?: GenericIdDto[];
};
export type OutBannerDto = {
  platform: PlatformDto;
  description?: string;
  cta?: string;
  label?: string;
  bannerImage?: ImageDto;
  logoImage?: ImageDto;
  url?: string;
  name: string;
  id: number;
  brands?: OutFilterDto[];
  categories?: OutFilterDto[];
  slug: string;
  status: "VISIBLE" | "INVISIBLE" | "ALMOST_VISIBLE";
  startDate?: string | null;
  endDate?: string | null;
};
export type CreateBannerDto = {
  platform: PlatformDto;
  description?: string;
  cta?: string;
  label?: string;
  bannerImage?: ImageDto;
  logoImage?: ImageDto;
  url?: string;
  name: string;
  brands?: GenericIdDto[];
  categories?: GenericIdDto[];
  startDate?: string | null;
  endDate?: string | null;
};
export type BannerListResponseDto = {
  total: number;
  banners: OutBannerDto[];
};
export type PutBannerDto = {
  platform: PlatformDto;
  description?: string;
  cta?: string;
  label?: string;
  bannerImage?: ImageDto;
  logoImage?: ImageDto;
  url?: string;
  name: string;
  brands?: GenericIdDto[];
  categories?: GenericIdDto[];
  startDate?: string | null;
  endDate?: string | null;
  id: number;
};
export type OutDealDto = {
  id: number;
  ean?: string;
  sku?: string;
  name: string;
  slug?: string;
  url?: string;
  live: boolean;
  image?: ImageDto;
  currency?: string;
  stock?: number;
  scoreModifier?: number;
  score?: number;
  price?: number;
  beforePrice?: number;
  discount?: number;
  sponsoredPosition?: number;
  platform: PlatformDto;
  updatedAt?: string;
  updatedAtByUser?: string;
  merchant?: OutMerchantDto;
  brands?: OutFilterDto[];
  categories?: OutFilterDto[];
  featuredFilter?: OutFilterDto;
  createdBy: "API" | "DASHBOARD" | "UNKNOWN";
};
export type SearchResponseDto = {
  merchants?: OutMerchantDto[];
  deals?: OutDealDto[];
};
export type CreateDealDto = {
  name: string;
  platform: PlatformDto;
};
export type DealsListResponseDto = {
  total: number;
  deals?: OutDealDto[];
};
export type ContainsIdDto = {
  id: number | null;
};
export type InDealDto = {
  id: number;
  ean?: string;
  sku?: string;
  name: string;
  slug?: string;
  url?: string;
  live: boolean;
  image?: ImageDto;
  currency?: string;
  stock?: number;
  scoreModifier?: number;
  score?: number;
  price?: number;
  beforePrice?: number;
  discount?: number;
  sponsoredPosition?: number;
  platform: PlatformDto;
  updatedAt?: string;
  updatedAtByUser?: string;
  merchant?: ContainsIdDto;
  brands?: ContainsIdDto[];
  categories?: ContainsIdDto[];
  featuredFilter?: ContainsIdDto;
};
export type DealArrayDto = {
  deals: OutDealDto[];
};
export type MerchantDealUsageDto = {
  id: number;
  name: string;
  usageByDeals: number;
};
export type DealMerchantsResponseDto = {
  merchants?: MerchantDealUsageDto[];
};
export type UserRoleDto = {
  id: number;
  name: string;
};
export type OutUserDto = {
  role: UserRoleDto;
  company?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  id: number;
};
export type UserListResponseDto = {
  total: number;
  users?: OutUserDto[];
};
export type OutDetailUserDto = {
  role: UserRoleDto;
  company?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  id: number;
  merchants: OutMerchantDto[];
};
export type InUserDto = {
  role: UserRoleDto;
  company?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  id?: number;
  merchants: GenericIdDto[];
};
export type UserEmailDto = {
  email: string;
  emailConfirmation: string;
  password: string;
};
export type SubscriberDto = {
  email: string;
};
export type FeedbackDto = {
  rating: number;
};
export type TrackerUrlDto = {
  affiliateUrl: string;
  googleAnalyticsCookie: string;
  clickOutUrl: string;
  weCanTrackCookie: string;
  identifier: number;
  platformId?: number;
  metadata?: object;
  merchantPriority?: number;
  resourceType: string;
};
export type ScoreUpdateActionDto = {
  resourceType: string;
  lastClickQuantity: number;
  platformId: number;
};
export type ScoreUpdateActionArrayDto = {
  actions: ScoreUpdateActionDto[];
};
export const {
  useGetHealthQuery,
  usePostAuthLoginMutation,
  usePostAuthAccessTokenMutation,
  usePostAuthResetTokenValidateMutation,
  usePostAuthResetTokenRequestMutation,
  usePutAuthPasswordResetMutation,
  usePutAuthPasswordUserByUserIdMutation,
  useGetAuthPasswordResetAllQuery,
  usePostAuthLogoutMutation,
  usePostFiltersMutation,
  useGetFiltersQuery,
  usePutFiltersByFilterIdMutation,
  useDeleteFiltersByFilterIdMutation,
  useGetFiltersByFilterIdQuery,
  useGetFiltersExtendedQuery,
  useGetFiltersMerchantsQuery,
  useGetFiltersTopQuery,
  useGetFiltersMerchantsTopQuery,
  useGetCampaignsMerchantByMerchantIdQuery,
  usePostCampaignsMutation,
  usePutCampaignsMutation,
  useDeleteCampaignsByIdMutation,
  usePostImagesMutation,
  useGetMerchantsCountQuery,
  useGetMerchantsQuery,
  usePostMerchantsMutation,
  useGetMerchantsBulkQuery,
  useGetMerchantsExtendedQuery,
  useGetMerchantsByMerchantIdQuery,
  usePutMerchantsByMerchantIdMutation,
  useDeleteMerchantsByMerchantIdMutation,
  useGetMerchantsSlugByMerchantSlugQuery,
  useGetBannersQuery,
  usePostBannersMutation,
  useGetBannersExtendedQuery,
  usePutBannersByBannerIdMutation,
  useDeleteBannersByBannerIdMutation,
  useGetBannersByBannerIdQuery,
  useGetBannersSlugByBannerSlugQuery,
  useGetSearchQuery,
  useGetDealsCountQuery,
  usePostDealsMutation,
  useGetDealsQuery,
  usePutDealsByDealIdMutation,
  useDeleteDealsByDealIdMutation,
  useGetDealsByDealIdQuery,
  usePatchDealsBulkMutation,
  useDeleteDealsBulkMutation,
  useGetDealsBulkQuery,
  useGetDealsMerchantsQuery,
  useGetDealsExtendedQuery,
  useGetUsersExtendedQuery,
  useGetUsersByUserIdQuery,
  usePutUsersByUserIdMutation,
  useDeleteUsersByUserIdMutation,
  usePatchUsersByUserIdEmailMutation,
  usePostUsersMutation,
  useGetFilterTypesQuery,
  useGetSitemapsQuery,
  useGetPlatformsQuery,
  usePutPlatformsByPlatformIdMutation,
  usePostNewslettersSubscribeMutation,
  useGetFeedbackQuery,
  usePostTrackerMutation,
  usePostScoreUpdateMutation,
} = injectedRtkApi;
