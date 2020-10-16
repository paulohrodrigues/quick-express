# index

## Version: 1.0.1

### /ecosystem/all

#### GET

**Summary:**

Register User Data

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /ecosystem/games/casino

#### GET

**Summary:**

Register User Data

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/admins/add

#### POST

**Summary:**

Register User Data

**Description:**

Search for matching accounts in the system.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [AddAdminRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/register

#### POST

**Summary:**

Register User Data

**Description:**

Search for matching accounts in the system.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [AdminRegisterRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/auth

#### POST

**Summary:**

Login User

**Description:**

Login Admin Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [AuthAdminRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/editType

#### POST

**Summary:**

Edit Type of Admin

**Description:**

Edit Type of Admin

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [EditAdminTypeRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/login

#### POST

**Summary:**

Login User

**Description:**

Login Admin Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [AdminLoginRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/login/2fa

#### POST

**Summary:**

Login User

**Description:**

Login Admin Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [Admin2FALoginRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admins/2fa/set

#### POST

**Summary:**

Setup 2fa

**Description:**

Search for matching accounts in the system.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | Admin object to submit to the network | Yes | [AdminSet2FARequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /deposit/max/set

#### POST

**Summary:**

Set max deposit

**Description:**

Set max deposit Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| deposit | body | Set max deposit | Yes | [SetMaxDeposit]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/password/reset/ask

#### POST

**Summary:**

Reset Password

**Description:**

reset password

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [ResetPasswordRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/email/confirm

#### POST

**Summary:**

Confirm Email

**Description:**

Confirm Email

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [ConfirmEmailRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/email/resend

#### POST

**Summary:**

Resend Confirm Email

**Description:**

Resend Confirm Email

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [ResendEmailRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/password/reset/set

#### POST

**Summary:**

Reset Password Set

**Description:**

reset password set

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [setPasswordRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/register

#### POST

**Summary:**

Register User Data

**Description:**

Search for matching accounts in the system.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [UserRegisterRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/auth

#### POST

**Summary:**

Login User

**Description:**

Login User Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [AuthUserRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/login

#### POST

**Summary:**

Login User

**Description:**

Login User Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [UserLoginRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/login/2fa

#### POST

**Summary:**

Login User

**Description:**

Login User Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [User2FALoginRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/2fa/set

#### POST

**Summary:**

Setup 2fa

**Description:**

Search for matching accounts in the system.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [UserSet2FARequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/bets

#### POST

**Summary:**

Get all Bets for the User

**Description:**

Get all Bets for the User

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User Information | Yes | [UserBetsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/summary

#### POST

**Summary:**

Get Summary Data for User

**Description:**

Get Summary Data for User

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User Information | Yes | [UserSummaryRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/get/bets

#### POST

**Summary:**

Get User Bets

**Description:**

Get User Bets

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User Information | Yes | [UserGetBetsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/pusher/auth

#### POST

**Summary:**

Get Push Notifications Channel For user

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User Information | Yes | [UserPusherNotificationsAuth]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /users/pusher/ping

#### POST

**Summary:**

Get Push Notifications Channel For user

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User Information | Yes | [UserPusherNotificationsAuth]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /wallet/virtualCurrency/edit

#### POST

**Summary:**

Edit virtual currency

**Description:**

Edit virtual currency

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [EditVirtualCurrencyRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/create

#### POST

**Summary:**

Create a App

**Description:**

Create a App for the user defined

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCreationRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/restrictedCountries/edit

#### POST

**Summary:**

Edit Restricted Countries

**Description:**

Edit Restricted Countries

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [EditRestrictedCountriesRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/summary

#### POST

**Summary:**

Get Summary Data for App

**Description:**

Get Summary Data for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppSummaryRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/get/users/bets

#### POST

**Summary:**

Get Users Bets From App

**Description:**

Get Users Bets From App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGetUsersBetsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/wallet/currency/add

#### POST

**Summary:**

Add Currency Wallet

**Description:**

Add Currency Wallet

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppAddCurrencyWallet]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/editTableLimit

#### POST

**Summary:**

Edit Table Limit

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGameEditTableLimit]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/affiliate/edit

#### POST

**Summary:**

Edit Table Limit

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppEditAffiliateStructure]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/affiliate/custom/add

#### POST

**Summary:**

Creater Custom Affiliate 1st level

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppAffiliateCustomStructure]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/theme

#### POST

**Summary:**

Edit App Theme Customization

**Description:**

Edit App Theme Customization

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationTheme]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/topBar

#### POST

**Summary:**

Edit Top Bar Customization

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationTopBar]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/banners

#### POST

**Summary:**

Edit Banner Information

**Description:**

Change Banners

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationBanners]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/logo

#### POST

**Summary:**

Edit Banner Information

**Description:**

Change Logo

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationLogo]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/colors

#### POST

**Summary:**

Edit Colors Information

**Description:**

Change Colors

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationColors]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/footer

#### POST

**Summary:**

Edit Colors Information

**Description:**

Change Footer

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationFooter]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/topIcon

#### POST

**Summary:**

Add Top Icon

**Description:**

Add Some Icons

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationTopIcon]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/customization/loadingGif

#### POST

**Summary:**

Add Loading GIF

**Description:**

Add Some GIFs for loading page

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppCustomizationLoadingGif]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/typography

#### POST

**Summary:**

Edit Typography Information

**Description:**

Change Typography

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppTypographyRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/address/get

#### POST

**Summary:**

Get Address Deposit for User

**Description:**

Change Footer

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppUserDepositAddressRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/deploy

#### POST

**Summary:**

Deploy App

**Description:**

Deploy Application

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppDeploy]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/editEdge

#### POST

**Summary:**

Edit Table Limit

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGameEditEdge]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/editImage

#### POST

**Summary:**

Edit Game Image

**Description:**

Change Game Image

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGameEditImage]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/editBackgroundImage

#### POST

**Summary:**

Edit Background Game Image

**Description:**

Change Background Game Image

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGameEditBackgroundImage]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/integrations/edit

#### POST

**Summary:**

Edit Integration

**Description:**

Change Integration Info

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppEditIntegration]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/integrations/mailSender/edit

#### POST

**Summary:**

Edit Mail Sender Integration

**Description:**

Change Mail Sender API Key and templates

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppEditMailSenderIntegration]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/get/auth

#### POST

**Summary:**

Get Data for App

**Description:**

Get Summary Data for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/get

#### POST

**Summary:**

Get Data for App

**Description:**

Get Summary Data for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppGetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /admin/app/get

#### POST

**Summary:**

Get Data for Admin

**Description:**

Get Summary Data for Admin

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| admin | body | App Information | Yes | [AdminGetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /logs/get

#### POST

**Summary:**

Get Data Logs

**Description:**

Get Data Logs

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [GetLogsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/transactions

#### POST

**Summary:**

Get Summary Data for App

**Description:**

Get Summary Data for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppTransactionsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/user/get

#### POST

**Summary:**

Get all User Info

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| bet | body | Game Information | Yes | [UserInfoGetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/bet/get

#### POST

**Summary:**

Get all Bet Info

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| bet | body | Bet Information | Yes | [GetBetInfoRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/users

#### POST

**Summary:**

Get App Users

**Description:**

Get All App Users

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| user | body | User object to submit to the network | Yes | [AppUsersRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/services/add

#### POST

**Summary:**

Add Services to Company

**Description:**

Add Services to Company

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppServicesRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/webhookBitgoDeposit

#### POST

**Summary:**

Update Wallet Amount for the App

**Description:**

Update Wallet Amount for the App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| id | query |  | No | string |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/lastBets

#### POST

**Summary:**

Get Lasts Bets for App

**Description:**

Get Lasts Bets for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppLastBetsRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/biggestBetWinners

#### POST

**Summary:**

Get Lasts Bets for App

**Description:**

Get Lasts Bets for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppBiggestWinnersRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/biggestUserWinners

#### POST

**Summary:**

Get Lasts Bets for App

**Description:**

Get Lasts Bets for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppBiggestWinnersRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/popularNumbers

#### POST

**Summary:**

Get Lasts Bets for App

**Description:**

Get Lasts Bets for App

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppPopularNumbersRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/add

#### POST

**Summary:**

Edit Table Limit

**Description:**

Change Table Limit

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppAddGameRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/jackpot/add

#### POST

**Summary:**

Edit Table Limit

**Description:**

add Jackpot

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AddAddonJackpotRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/balance/add

#### POST

**Summary:**

Add Balance

**Description:**

Add Balance

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AddAddonBalanceRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/jackpot/edge/edit

#### POST

**Summary:**

Edit Percentage

**Description:**

Edit Edge Jackpot

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [EditEdgeJackpotRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/balance/edit

#### POST

**Summary:**

Edit balance initial

**Description:**

Edit Balance

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [editAddonBalanceRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/autoWithdraw/add

#### POST

**Summary:**

Add Automatic Withdraw

**Description:**

add Auto Withdraw

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AddAddonAutoWithdrawRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/autoWithdraw/editAutoWithdraw

#### POST

**Summary:**

Edit If is Automatic Withdraw

**Description:**

Edit If is Automatic Withdraw

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppEditAddonAutoWithdrawRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/txFee/add

#### POST

**Summary:**

Add Transaction Fee

**Description:**

add Transaction Fee

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AddAddonTxFeeRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/txFee/editTxFee

#### POST

**Summary:**

Edit If has Transaction Fee

**Description:**

Edit If has Transaction Fee

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| app | body | App Information | Yes | [AppEditAddonTxFeeRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/getAll

#### POST

**Summary:**

Get all Games for the App defined

**Description:**

Get all Games for the App defined

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| game | body | Game Information | Yes | [GetGamesFromAppRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/bet/place

#### POST

**Summary:**

Place a Bet

**Description:**

Place a Bet for User Selected

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| bet | body | Bet Information | Yes | [PlaceBetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/bet/max

#### POST

**Summary:**

Set Max of a Bet

**Description:**

Set a Max Value for a Bet

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| bet | body | Bet Information | Yes | [MaxBetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /app/games/get

#### POST

**Summary:**

Get a game

**Description:**

Get a Game Data

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| bet | body | Game Information | Yes | [GameGetRequest]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /status/post

#### POST

**Summary:**

Test Ping

**Description:**

Test Ping for post.

**Parameters**

| Name | Located in | Description | Required | Schema |
| :--- | :--- | :--- | :--- | :--- |
| ping | body | Ping Object for test | Yes | [PingPost]() |

**Responses**

| Code | Description | Schema |
| :--- | :--- | :--- |
| 200 | Success | [GeneralResponse]() |
| default | Error | [ErrorResponse]() |

### /swagger

### Models

#### SetMaxDeposit

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | ID app |  |
| Yes |  |  |  |
| wallet\_id | string \(name\) | Unique identifier of the wallet |  |
| Yes |  |  |  |
| amount | number \(number\) | Max value for deposit |  |
| Yes |  |  |  |

#### AdminRegisterRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| username | string \(username\) | Unique identifier of the user, besides the ID |  |
| Yes |  |  |  |
| name | string | User Real Name |  |
| Yes |  |  |  |
| email | string | User Email |  |
| Yes |  |  |  |
| password | string | Password Hashed |  |
| Yes |  |  |  |

#### ConfirmEmailRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| token | string \(string\) | token |  |
| Yes |  |  |  |

#### ResendEmailRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string \(string\) | user id |  |
| Yes |  |  |  |

#### setPasswordRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| token | string \(string\) | token |  |
| Yes |  |  |  |
| password | string \(string\) | password |  |
| Yes |  |  |  |
| user\_id | string \(string\) | user id |  |
| Yes |  |  |  |

#### ResetPasswordRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| username\_or\_email | string \(string\) | username or email |  |
| Yes |  |  |  |

#### UserRegisterRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| username | string \(username\) | Unique identifier of the user, besides the ID |  |
| Yes |  |  |  |
| name | string \(name\) | User Real Name |  |
| Yes |  |  |  |
| email | string \(email\) | User Email |  |
| Yes |  |  |  |
| affiliateLink | string |  | No |
| app | string | App Id |  |
| Yes |  |  |  |

#### GetBetInfoRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| bet | string | Unique identifier of the bet, ID |  |
| Yes |  |  |  |
| app | string | Unique identifier of the app, ID |  |
| Yes |  |  |  |

#### UserInfoGetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string | Unique identifier of the user, ID |  |
| Yes |  |  |  |
| app | string | Unique identifier of the user, ID |  |
| Yes |  |  |  |

#### EditAdminTypeRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| admin | string | Admin Id |  |
| Yes |  |  |  |
| adminToModify | string | Admin Id |  |
| Yes |  |  |  |
| permission | object |  | Yes |

#### AdminLoginRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| username | string \(username\) | Unique identifier of the user, besides the ID |  |
| Yes |  |  |  |
| password | password | User Password Encrypted |  |
| Yes |  |  |  |

#### AdminSet2FARequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| admin | string | Admin Id |  |
| Yes |  |  |  |
| 2fa\_token | string | Token Prior to the set of 2FA |  |
| Yes |  |  |  |
| 2fa\_secret | string | Secret Token 2FA |  |
| Yes |  |  |  |

#### Admin2FALoginRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| 2fa\_token | string \(username\) | Token to Unlock Login Data |  |
| Yes |  |  |  |

#### UserLoginRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| username | string \(username\) | Unique identifier of the user, besides the ID |  |
| Yes |  |  |  |
| password | password | User Password Encrypted |  |
| Yes |  |  |  |
| app | string | Unique identifier of the App Id |  |
| Yes |  |  |  |

#### UserSet2FARequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string | User Id |  |
| Yes |  |  |  |
| 2fa\_token | string | Token Prior to the set of 2FA |  |
| Yes |  |  |  |
| 2fa\_secret | string | Secret Token 2FA |  |
| Yes |  |  |  |

#### User2FALoginRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| 2fa\_token | string \(username\) | Token to Unlock Login Data |  |
| Yes |  |  |  |

#### UserSummaryRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| type | string \(name\) | Type of Summary Data |  |
| Yes |  |  |  |
| user | string \(name\) | User ID |  |
| Yes |  |  |  |
| periodicity | string \(name\) | Periodicity of Data |  |
| No |  |  |  |
| currency | string \(name\) | Currency ID |  |
| Yes |  |  |  |

#### UserGetBetsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string \(name\) | User ID |  |
| Yes |  |  |  |
| size | number | Amount of Bets Wanted |  |
| No |  |  |  |
| offset | number |  | No |
| bet | string \(name\) | Bet ID |  |
| No |  |  |  |
| game | string \(name\) | Game ID |  |
| No |  |  |  |
| currency | string \(name\) | Currency ID |  |
| No |  |  |  |

#### UserPusherNotificationsAuth

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| socket\_id | string \(name\) |  | No |
| channel\_name | string \(name\) |  | No |
| user | string \(name\) |  | No |

#### EditVirtualCurrencyRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| currency | string \(name\) | currency ID |  |
| No |  |  |  |
| image | string \(name\) | Logo currency |  |
| No |  |  |  |
| price | number \(number\) | Price of virtual currency |  |
| No |  |  |  |

#### AppGameEditEdge

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| game | string \(name\) | Game id |  |
| Yes |  |  |  |
| edge | number | New Edge |  |
| Yes |  |  |  |

#### AppGameEditBackgroundImage

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| game | string \(name\) | Game id |  |
| Yes |  |  |  |
| background\_url | string | image blob or link | Yes |

#### AppGameEditImage

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| game | string \(name\) | Game id |  |
| Yes |  |  |  |
| image\_url | string | image blob or link | Yes |

#### AppAddCurrencyWallet

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| currency\_id | string \(name\) | Currency id |  |
| Yes |  |  |  |
| passphrase | string | Passphrase to protect the wallet |  |
| Yes |  |  |  |

#### AppGameEditTableLimit

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| game | string \(name\) | Game id |  |
| Yes |  |  |  |
| tableLimit | number | New Table Limit |  |
| Yes |  |  |  |
| wallet | string | Ticket wallet. Ex.: eth |  |
| Yes |  |  |  |

#### AppCustomizationBanners

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| banners | \[ object \] |  | Yes |
| autoDisplay | boolean |  | Yes |

#### AppCustomizationColors

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| colors | \[ object \] |  | Yes |

#### AppCustomizationLogo

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| logo | string | image blob or link | Yes |

#### AppCustomizationFooter

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| supportLinks | \[ object \] |  | Yes |
| communityLinks | \[ object \] |  | Yes |

#### AppCustomizationTheme

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| theme | string \(name\) |  | Yes |

#### AppCustomizationTopBar

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| backgroundColor | string \(name\) |  | Yes |
| textColor | string \(name\) |  | Yes |
| text | string \(name\) |  | Yes |
| isActive | boolean |  | Yes |

#### AppCustomizationTopIcon

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| topIcon | string | image blob or link | Yes |

#### AppCustomizationLoadingGif

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| loadingGif | string | image blob or link | Yes |

#### AppTypographyRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| typography | object |  | Yes |

#### AppDeploy

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |

#### AppEditIntegration

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| publicKey | string \(name\) |  | Yes |
| privateKey | string \(name\) |  | Yes |
| integration\_type | string \(name\) |  | Yes |
| integration\_id | string \(name\) |  | Yes |
| isActive | boolean |  | Yes |

#### AppEditMailSenderIntegration

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| apiKey | string \(name\) |  | Yes |
| templateIds | \[ object \] |  | Yes |

#### AppEditAffiliateStructure

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| structures | \[ object \] |  | Yes |
| affiliateTotalCut | number | Total Affiliate Cut \(0-1\) |  |
| Yes |  |  |  |

#### AppAffiliateCustomStructure

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string | App id |  |
| Yes |  |  |  |
| user | string | User id |  |
| Yes |  |  |  |
| affiliatePercentage | number | Total Affiliate Cut \(0-1\) |  |
| Yes |  |  |  |

#### AppGetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |

#### GetLogsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin id |  |
| Yes |  |  |  |
| filter | string \(name\) | Filter To Log |  |
| No |  |  |  |
| size | number | Size of response |  |
| No |  |  |  |
| offset | number | Offset of response |  |
| No |  |  |  |

#### AdminGetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App id |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin id |  |
| Yes |  |  |  |

#### AppCreationRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| name | string \(name\) | App Name |  |
| Yes |  |  |  |
| description | string \(description\) | App Description |  |
| Yes |  |  |  |
| virtual | boolean |  | No |
| marketType | integer | Market Mapping Number |  |
| Yes |  |  |  |
| metadataJSON | string | Metadata JSON Object |  |
| Yes |  |  |  |
| admin\_id | string | Admin Id |  |
| Yes |  |  |  |

#### EditRestrictedCountriesRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| countries | \[ string \] |  | Yes |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |

#### GameGetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| id | string \(name\) | Game Id |  |
| Yes |  |  |  |

#### AppTransactionsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| filters | \[ object \] |  | Yes |
| size | number | Amount of Bets Wanted |  |
| No |  |  |  |
| offset | number |  | No |

#### AppPopularNumbersRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| size | number | size |  |
| No |  |  |  |

#### AppLastBetsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| game | string \(name\) | Game ID |  |
| No |  |  |  |

#### AppUserDepositAddressRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| currency | string \(name\) | Currency ID |  |
| Yes |  |  |  |
| id | string \(name\) | User ID |  |
| Yes |  |  |  |

#### AppBiggestWinnersRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |

#### AppUsersRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| size | number |  | No |
| user | string \(name\) | User Id |  |
| No |  |  |  |
| offset | number |  | No |

#### UserBetsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| size | number | Amount of Bets Wanted |  |
| No |  |  |  |
| user | string \(name\) | User ID |  |
| Yes |  |  |  |
| periodicity | string \(name\) | Periodicity of Data |  |
| No |  |  |  |
| currency | string \(name\) | Currency ID |  |
| Yes |  |  |  |
| offset | number |  | No |
| game | string \(name\) | Game ID |  |
| No |  |  |  |

#### AppSummaryRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| type | string \(name\) | App Name |  |
| Yes |  |  |  |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| periodicity | string \(name\) | Periodicity of Data |  |
| No |  |  |  |
| currency | string \(name\) | Currency ID |  |
| Yes |  |  |  |

#### AppGetUsersBetsRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| user | string \(name\) | User ID |  |
| No |  |  |  |
| currency | string \(name\) | Currency ID |  |
| No |  |  |  |
| bet | string \(name\) | Bet ID |  |
| No |  |  |  |
| game | string \(name\) | Game ID |  |
| No |  |  |  |
| isJackpot | boolean \(boolean\) | Is Jackpot |  |
| No |  |  |  |
| size | number | Amount of Bets Wanted |  |
| No |  |  |  |
| offset | number |  | No |

#### AppAddGameRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| game | string \(name\) | Game ID |  |
| Yes |  |  |  |

#### AddAddonJackpotRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |

#### AddAddonBalanceRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |

#### AddAddonAutoWithdrawRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |

#### AppEditAddonAutoWithdrawRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| currency | string \(name\) | currency ID |  |
| Yes |  |  |  |
| autoWithdrawParams | object |  | Yes |

#### AddAddonTxFeeRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |

#### AppEditAddonTxFeeRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| currency | string \(name\) | currency ID |  |
| Yes |  |  |  |
| txFeeParams | object |  | Yes |

#### AppServicesRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| services | \[ integer \] | Services ID |  |
| Yes |  |  |  |

#### editAddonBalanceRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| balance | number \(number\) | Balance Initial |  |
| Yes |  |  |  |
| currency | string \(name\) | ID Currency |  |
| Yes |  |  |  |

#### EditEdgeJackpotRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(name\) | App ID |  |
| Yes |  |  |  |
| admin | string \(name\) | Admin ID |  |
| Yes |  |  |  |
| edge | number \(number\) | Edge to percentage of jackpot |  |
| Yes |  |  |  |

#### AuthAdminRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| admin | string | Admin Id |  |
| Yes |  |  |  |

#### AuthUserRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string | User Id |  |
| Yes |  |  |  |
| app | string | App Id |  |
| Yes |  |  |  |

#### GetGamesFromAppRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string | App Id |  |
| Yes |  |  |  |

#### PlaceBetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| user | string \(string\) | User Id |  |
| Yes |  |  |  |
| app | string \(string\) | App Id |  |
| Yes |  |  |  |
| game | string \(string\) | Game Id |  |
| Yes |  |  |  |
| currency | string \(string\) | Currency Id |  |
| Yes |  |  |  |
| nonce | number | Nonce |  |
| Yes |  |  |  |
| result | \[ object \] |  | Yes |

#### AddAdminRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| email | string \(string\) | Email for admin |  |
| Yes |  |  |  |
| app | string \(string\) | App Id |  |
| Yes |  |  |  |
| admin | string \(string\) | Admin Current Id |  |
| Yes |  |  |  |

#### MaxBetRequest

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| app | string \(string\) | App Id |  |
| Yes |  |  |  |
| game | string \(string\) | Game Id |  |
| Yes |  |  |  |
| maxBet | number \(number\) | Bet Max Value |  |
| Yes |  |  |  |

#### GeneralResponse

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| data | object \(data\) | Unique identifier of the user, besides the ID |  |
| Yes |  |  |  |
| meta | object \(meta\) | User Real Name |  |
| Yes |  |  |  |

#### ErrorResponse

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| message | string |  | Yes |

#### PingPost

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| type | string | Type Auth |  |
| Yes |  |  |  |
| app | string | APP ID |  |
| No |  |  |  |

