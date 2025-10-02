//TEMPLATES
const elCardTemplate = document.getElementById("cardTemplate");
const elCardSkeletonTemplate = document.getElementById("cardSkeletonTemplate");

// ELEMENTS
const elCardContainer = document.getElementById("cardContainer");
const elLoginLogoutBtn = document.getElementById("loginLogoutBtn");
const elModalLoginButton = document.getElementById("modalLoginButton");
const elCountrySelect = document.getElementById("countrySelect")
const elCategorySelect = document.getElementById("categorySelect")
const elColorSelect = document.getElementById("colorSelect")
const elFuelTypeSelect = document.getElementById("fuelTypeSelect")
const elFilterType = document.getElementById("filterType")
const elFilterLoader = document.getElementById("filterLoader")
const elFilterZone = document.getElementById("filterZone")
const elFilterSelectValue = document.getElementById("filterSelectValue")
const elClearButton = document.getElementById("clearButton")

// ELEMENTS DETAILS
const elDetailsWrapper = document.getElementById("detailsWrapper")
const elDetailsLoading = document.getElementById("detailsLoading")
const elDetailsTitle = document.getElementById("detailsTitle")
const elDetailsDescription = document.getElementById("detailsDescription")
const elDetailsTrim = document.getElementById("detailsTrim")
const elDetailsGeneration = document.getElementById("detailsGeneration")
const elDetailsYear = document.getElementById("detailsYear")
const elDetailsColor = document.getElementById("detailsColor")
const elDetailsColorName = document.getElementById("detailsColorName")
const elDetailsCategory = document.getElementById("detailsCategory")
const elDetailsDoorCount = document.getElementById("detailsDoorCount")
const elDetailsSeatCount = document.getElementById("detailsSeatCount")
const elDetailsMaxSpeed = document.getElementById("detailsMaxSpeed")
const elDdetailsAcceleration = document.getElementById("detailsAcceleration")
const elDetailsEngine = document.getElementById("detailsEngine")
const elDetailsHorsePower = document.getElementById("detailsHorsePower")
const elDetailsFuelType = document.getElementById("detailsFuelType")
const elDetailsCountry = document.getElementById("detailsCountry")
const elDetailsCity = document.getElementById("detailsCity")
const elDetailsHighway = document.getElementById("detailsHighway")
const elDetailsCombined = document.getElementById("detailsCombined")

// LOGIN ELEMENTS
const elLoginForm = document.getElementById("form")
const elRegisterForm = document.getElementById("formReg")


// LOADER
const elCardLoaders = document.getElementById("cardLoaders");

// MODAL
const elInfoModal = document.getElementById("infoModal");
// const elDeleteModal = document.getElementById("deleteModal");



export {
    elCardTemplate,
    elCardContainer,
    elCardLoaders,
    elCardSkeletonTemplate,
    elInfoModal,
    elLoginLogoutBtn,
    elModalLoginButton,
    elDetailsTitle,
    elDetailsDescription,
    elDetailsTrim,
    elDetailsGeneration,
    elDetailsYear,
    elDetailsColor,
    elDetailsColorName,
    elDetailsCategory,
    elDetailsDoorCount,
    elDetailsSeatCount,
    elDetailsMaxSpeed,
    elDdetailsAcceleration,
    elDetailsEngine,
    elDetailsHorsePower,
    elDetailsFuelType,
    elDetailsCountry,
    elDetailsCity,
    elDetailsHighway,
    elDetailsCombined,
    elDetailsWrapper,
    elDetailsLoading,
    elCountrySelect,
    elCategorySelect,
    elColorSelect,
    elFuelTypeSelect,
    elFilterType,
    elFilterLoader,
    elFilterZone,
    elFilterSelectValue,
    elClearButton,
    elLoginForm,
    elRegisterForm,
    // elDeleteModal
}