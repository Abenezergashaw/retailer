<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";
import BalanceTable from "./BalanceTable.vue";
import DateTimePicker from "./DateTimePicker.vue";
import PrintIcon from "./PrintIcon.vue";
import RefreshButton from "./RefreshButton.vue";
import CloseIcon from "./CloseIcon.vue";

const props = defineProps({
  showCashierModal: { type: Boolean, default: false },
  title: String,
  balanceData: Array,
  balance: Number,
  balanceDataLoader: Boolean,
  recallBets: Array,
  recallBetLoader: Boolean,
  resultLoader: Boolean,
});

console.log("Balance", props.balance);

const emit = defineEmits(["close"]);

const isDragging = ref(false);
const isResizing = ref(false);
const resizeDir = ref(null);
const offsetX = ref(0);
const offsetY = ref(0);
const modalRef = ref(null);
const inputRef = ref(null);

const mainTab = ref("report");
const secondTab = ref("cash");

const selectedUser = ref("NB2.cashier2 (NB2.cashier2)");
const users = ["NB2.cashier2 (NB2.cashier2)"];

const resultData = ref({
  Data: [
    {
      ID: 72277974,
      FeedId: "7123784",
      Number: 6431,
      StartTime: "/Date(1757785800830)/",
      FinishTime: "/Date(1757785882830)/",
      EventTypeID: 3,
      EventTypeEnumName: "HarnessRacing",
      EventType: {
        EnumValue: 3,
        Value: 3,
        Name: "Harness Racing",
        Abbreviation: "HR",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "HarnessRacing",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "cb9325e1-bf02-471e-8bbe-47cdc20510b3",
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "ef82ead9-97fe-4d4e-8753-2f87d893c171",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "bc252eb8-5cc8-4c51-83f3-85d4c0354f2e",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "1698298a-6522-4832-b60e-d519981350d1",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "da58d63d-45d1-4948-9013-92188425f722",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "d80b8b76-d412-47f8-9610-023247512414",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "dca4a617-bf6a-459a-bb50-4f5f31b0c685",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "ChargingChariotsBrand",
        IsNew: false,
        DisplayResourceKey: "HarnessRacing",
        UseBetVolumeService: false,
        AssetPath: "HorseSilks",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 3,
      },
      StartTimeAsWords: "20:50",
      TranslatedEventTypeName: "Harness Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "HarnessRacing",
    },
    {
      ID: 72277971,
      FeedId: "7123782",
      Number: 9221,
      StartTime: "/Date(1757785740110)/",
      FinishTime: "/Date(1757785806110)/",
      EventTypeID: 19,
      EventTypeEnumName: "SmartPlayKeno",
      EventType: {
        EnumValue: 19,
        Value: 19,
        Name: "Keno",
        Abbreviation: "K",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "SmartPlayKeno",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: 1,
        MaxNumberOfPicks: 10,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 8,
        FeedGuids: [
          "4745f32c-ad41-4c75-a702-59f52a7baf6e",
          "3adb0880-7c93-4de7-9394-b3fc696a2b50",
          "10fc0c55-08f0-4334-aaa2-819f61226ea5",
          "cd562924-e274-4581-b5f1-96451ed9fd71",
          "4144ad85-725f-4199-be53-9b9ef154c7ab",
          "ec23d7a3-f150-4825-8507-983592e46155",
          "895349c2-de84-4f5a-9cf2-128adadd06d0",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "48a218b4-f7b1-4619-954e-48c65ec81898",
          "b464f189-cd8c-4db0-92a1-2f5ebf5c3b45",
          "59eb8ca4-0c47-4d71-a6d4-0bce326920bb",
          "d7a2c42a-6fe9-46a9-88a0-c0b8fe0ecd24",
          "3302bc47-455b-4abe-aa59-8dbf2f287149",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "81f1253f-b068-48b9-9b6f-aed3015498f0",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "3cc15e1f-66e5-4079-8cad-8cb7f148df6d",
          "c48d9b76-b30e-4ede-b14e-9a772db78f77",
          "083554d7-b190-4b9d-bb8e-727afc2e6f8e",
          "0b6c3d4d-41c0-4347-a9ed-7444fc1b5543",
          "4074b544-00f7-4027-beab-0849b8424a72",
          "442dbc12-1a5b-4663-b041-dc939dac9e78",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "9a3ced5e-adf4-4e35-aff0-d05439b461c7",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "28b63a23-c9de-4b55-8824-b8ebaf649685",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "127b04ec-6879-4762-9cf0-6fa17acc5c95",
          "d80b8b76-d412-47f8-9610-023247512414",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
          "f32d7161-3350-447b-bc6e-e202b5ba3b67",
          "fc83900e-d613-484b-9acd-4bbbbbd3da11",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "3dd3f721-74a9-4527-8ea9-6df167d27ba1",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "ece726d2-2bc3-4e58-b8e2-6e7620ba7735",
          "ef889a31-83c6-4aa1-930b-972bb9febc4d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "7d6745ba-e5a1-4585-801f-4ff38ad7a095",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "338c8307-c433-4991-9da2-e79a184313f3",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "0b0a99d8-425d-404e-9cfa-bbc052f0d349",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "9ffbe92f-f720-4f8e-a7ae-3985ce5bb58b",
          "1662a502-2297-4d62-b88f-fe6c7b5aa17f",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "da58d63d-45d1-4948-9013-92188425f722",
          "3a0240a3-16b1-497d-af39-837fa6f76653",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "a6b2b800-47a7-4f2d-9903-155873ee6a33",
          "98c6b7bd-65ee-47f9-9305-4af4e656a987",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "db494e7e-de01-4d2a-95a7-da493c3f9de7",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "3e4c1cd4-4892-4422-ad4c-c57976c0f563",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "1ea7f276-d969-495f-8410-41237d20e7ad",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "707586ad-7a5e-4aff-9e11-42331aaf29c5",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "538c722e-e773-410e-bbd6-d71b1bef4719",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "1698298a-6522-4832-b60e-d519981350d1",
          "492385c2-12e9-4abd-a36f-0e6330a9f15f",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "8ed86dcb-e0fd-436c-a3a5-a4890067bbe4",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "7ad1a402-5534-4156-8eee-897991915638",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "bbcd0bfc-9fae-4e8a-a046-de68a19b981e",
          "98716fae-623f-4023-89cd-88caab0af15e",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: true,
        AllowMarketConfig: false,
        EventTypeColor: "",
        DisplaySingleEvent: true,
        AllowMultiBet: false,
        LaunchURL: null,
        BrandNameResourceKey: "",
        IsNew: false,
        DisplayResourceKey: "SmartPlayKeno",
        UseBetVolumeService: false,
        AssetPath: null,
        VisionXEventEnum: "Keno",
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 19,
      },
      StartTimeAsWords: "20:49",
      TranslatedEventTypeName: "Keno",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "SmartPlayKeno",
    },
    {
      ID: 72277973,
      FeedId: "7123780",
      Number: 8222,
      StartTime: "/Date(1757785680687)/",
      FinishTime: "/Date(1757785700687)/",
      EventTypeID: 24,
      EventTypeEnumName: "SpinAndWin",
      EventType: {
        EnumValue: 24,
        Value: 24,
        Name: "Spin And Win",
        Abbreviation: "SW",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "SpinAndWin",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "SpinAndWinEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 9,
        FeedGuids: [
          "83f25d8d-f27b-48d7-a94a-ec70feceeb79",
          "10fc0c55-08f0-4334-aaa2-819f61226ea5",
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "4144ad85-725f-4199-be53-9b9ef154c7ab",
          "cb9325e1-bf02-471e-8bbe-47cdc20510b3",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "895349c2-de84-4f5a-9cf2-128adadd06d0",
          "ec23d7a3-f150-4825-8507-983592e46155",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "ef82ead9-97fe-4d4e-8753-2f87d893c171",
          "d25e635b-7b02-4451-85c8-85c7b35936a6",
          "dbf004a9-025b-4ebc-a891-0d2e93889e3c",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "27c9092d-f9ea-4714-8fe2-a44f52b62b67",
          "48a218b4-f7b1-4619-954e-48c65ec81898",
          "b464f189-cd8c-4db0-92a1-2f5ebf5c3b45",
          "ff934045-87cc-42c0-b584-1d94c9ba13a5",
          "59eb8ca4-0c47-4d71-a6d4-0bce326920bb",
          "d7a2c42a-6fe9-46a9-88a0-c0b8fe0ecd24",
          "3302bc47-455b-4abe-aa59-8dbf2f287149",
          "8e924d29-c1d7-4557-9097-1038f1946980",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "81f1253f-b068-48b9-9b6f-aed3015498f0",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "3cc15e1f-66e5-4079-8cad-8cb7f148df6d",
          "e5bb12df-e604-47e5-bac1-fa1496444a71",
          "fa3d9242-c7aa-4bcd-9b14-1b65433400ed",
          "083554d7-b190-4b9d-bb8e-727afc2e6f8e",
          "6d873510-172c-475a-9215-be1e08f9d308",
          "0b6c3d4d-41c0-4347-a9ed-7444fc1b5543",
          "442dbc12-1a5b-4663-b041-dc939dac9e78",
          "9a3ced5e-adf4-4e35-aff0-d05439b461c7",
          "0b8bea97-1a7c-4b9a-ab12-53fd21328d63",
          "a19a94ae-b2b0-45f3-9c81-20a3484404b1",
          "4074b544-00f7-4027-beab-0849b8424a72",
          "c48d9b76-b30e-4ede-b14e-9a772db78f77",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "28b63a23-c9de-4b55-8824-b8ebaf649685",
          "ad6735db-0413-4e3d-ac38-8bb8820a5a21",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "f32d7161-3350-447b-bc6e-e202b5ba3b67",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "127b04ec-6879-4762-9cf0-6fa17acc5c95",
          "d80b8b76-d412-47f8-9610-023247512414",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
          "fc83900e-d613-484b-9acd-4bbbbbd3da11",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "3dd3f721-74a9-4527-8ea9-6df167d27ba1",
          "abfe0044-574e-439c-9184-594a70259717",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "ece726d2-2bc3-4e58-b8e2-6e7620ba7735",
          "ef889a31-83c6-4aa1-930b-972bb9febc4d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "7d6745ba-e5a1-4585-801f-4ff38ad7a095",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "338c8307-c433-4991-9da2-e79a184313f3",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "0b0a99d8-425d-404e-9cfa-bbc052f0d349",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "9ffbe92f-f720-4f8e-a7ae-3985ce5bb58b",
          "1662a502-2297-4d62-b88f-fe6c7b5aa17f",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "da58d63d-45d1-4948-9013-92188425f722",
          "3a0240a3-16b1-497d-af39-837fa6f76653",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "a6b2b800-47a7-4f2d-9903-155873ee6a33",
          "98c6b7bd-65ee-47f9-9305-4af4e656a987",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "db494e7e-de01-4d2a-95a7-da493c3f9de7",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "2a1e16b7-cd11-4ebd-bdbd-ac73e4a97e94",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "3e4c1cd4-4892-4422-ad4c-c57976c0f563",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "1ea7f276-d969-495f-8410-41237d20e7ad",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "707586ad-7a5e-4aff-9e11-42331aaf29c5",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "caca3110-45c0-466f-9d3a-91acf92ceafc",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "538c722e-e773-410e-bbd6-d71b1bef4719",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "0ff019f5-3231-4e8a-abc8-305f34e32574",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "7d0358fb-9cfa-45a9-a992-24988a985050",
          "1698298a-6522-4832-b60e-d519981350d1",
          "492385c2-12e9-4abd-a36f-0e6330a9f15f",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "8ed86dcb-e0fd-436c-a3a5-a4890067bbe4",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "7ad1a402-5534-4156-8eee-897991915638",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "d9953b27-89c2-4f3e-852f-b73651a19502",
          "bbcd0bfc-9fae-4e8a-a046-de68a19b981e",
          "21c6cce7-62c3-4772-80ad-b5cb5e94edfe",
          "98716fae-623f-4023-89cd-88caab0af15e",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 5,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: true,
        AllowMarketConfig: false,
        EventTypeColor: "",
        DisplaySingleEvent: true,
        AllowMultiBet: false,
        LaunchURL: null,
        BrandNameResourceKey: "",
        IsNew: false,
        DisplayResourceKey: "SpinAndWin",
        UseBetVolumeService: true,
        AssetPath: null,
        VisionXEventEnum: "SpinAndWin",
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 24,
      },
      StartTimeAsWords: "20:48",
      TranslatedEventTypeName: "Spin And Win",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "SpinAndWin",
    },
    {
      ID: 72277970,
      FeedId: "7123778",
      Number: 20431,
      StartTime: "/Date(1757785680033)/",
      FinishTime: "/Date(1757785750033)/",
      EventTypeID: 6,
      EventTypeEnumName: "MotorRacing",
      EventType: {
        EnumValue: 6,
        Value: 6,
        Name: "Motor Racing",
        Abbreviation: "MR",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "MotorRacing",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "10fc0c55-08f0-4334-aaa2-819f61226ea5",
          "4144ad85-725f-4199-be53-9b9ef154c7ab",
          "895349c2-de84-4f5a-9cf2-128adadd06d0",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "a0f4e57f-a468-4b4c-8b2b-88e8e71a1753",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "083554d7-b190-4b9d-bb8e-727afc2e6f8e",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "ece726d2-2bc3-4e58-b8e2-6e7620ba7735",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "0b0a99d8-425d-404e-9cfa-bbc052f0d349",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "da58d63d-45d1-4948-9013-92188425f722",
          "3a0240a3-16b1-497d-af39-837fa6f76653",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "3e4c1cd4-4892-4422-ad4c-c57976c0f563",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "21c6cce7-62c3-4772-80ad-b5cb5e94edfe",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "a6b2b800-47a7-4f2d-9903-155873ee6a33",
          "9ffbe92f-f720-4f8e-a7ae-3985ce5bb58b",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "bb225a94-7134-43f9-bb46-041b79b8934d",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "7d0358fb-9cfa-45a9-a992-24988a985050",
          "1698298a-6522-4832-b60e-d519981350d1",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "MaxcarBrand",
        IsNew: false,
        DisplayResourceKey: "MotorRacing",
        UseBetVolumeService: false,
        AssetPath: "MaxCarHelmuts",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 6,
      },
      StartTimeAsWords: "20:48",
      TranslatedEventTypeName: "Motor Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "MotorRacing",
    },
    {
      ID: 72277965,
      FeedId: "7123775",
      Number: 7427,
      StartTime: "/Date(1757785560090)/",
      FinishTime: "/Date(1757785623090)/",
      EventTypeID: 16,
      EventTypeEnumName: "SteepleChase",
      EventType: {
        EnumValue: 16,
        Value: 16,
        Name: "Steeple Chase",
        Abbreviation: "SC",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "SteepleChase",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "ef82ead9-97fe-4d4e-8753-2f87d893c171",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "d9953b27-89c2-4f3e-852f-b73651a19502",
          "1698298a-6522-4832-b60e-d519981350d1",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "da58d63d-45d1-4948-9013-92188425f722",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "d80b8b76-d412-47f8-9610-023247512414",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "dca4a617-bf6a-459a-bb50-4f5f31b0c685",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "18547d31-bbf1-45fc-bb43-886a2cd0c056",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "JumpsBrand",
        IsNew: false,
        DisplayResourceKey: "SteepleChase",
        UseBetVolumeService: false,
        AssetPath: "HorseSilks",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 16,
      },
      StartTimeAsWords: "20:46",
      TranslatedEventTypeName: "Steeple Chase Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "SteepleChase",
    },
    {
      ID: 72277942,
      FeedId: "8321270",
      Number: 1109,
      StartTime: "/Date(1757785560067)/",
      FinishTime: "/Date(1757785625067)/",
      EventTypeID: 1,
      EventTypeEnumName: "DashingDerby",
      EventType: {
        EnumValue: 1,
        Value: 1,
        Name: "Horses",
        Abbreviation: "H",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "DashingDerby",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "e72c2415-8dbc-42e6-811f-90f05908115b",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "cb9325e1-bf02-471e-8bbe-47cdc20510b3",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "47c99b4e-f37f-4295-b9c1-b6dae6d24c19",
          "48a218b4-f7b1-4619-954e-48c65ec81898",
          "aa988f86-4f65-4a95-8998-1a1982f81aee",
          "ff934045-87cc-42c0-b584-1d94c9ba13a5",
          "bc252eb8-5cc8-4c51-83f3-85d4c0354f2e",
          "9bb7d480-90f5-44bb-bcb3-573163e80a20",
          "3302bc47-455b-4abe-aa59-8dbf2f287149",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "0b6c3d4d-41c0-4347-a9ed-7444fc1b5543",
          "0b8bea97-1a7c-4b9a-ab12-53fd21328d63",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "a0f4e57f-a468-4b4c-8b2b-88e8e71a1753",
          "6d873510-172c-475a-9215-be1e08f9d308",
          "b058ec15-6b24-4910-9331-1c7bd6d33298",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "cc7ab447-01f2-49f3-a0ce-d28f08e8979c",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "dca4a617-bf6a-459a-bb50-4f5f31b0c685",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "3dd3f721-74a9-4527-8ea9-6df167d27ba1",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "2067db3d-a9b6-4a81-8839-49ac0af869e2",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "1ea7f276-d969-495f-8410-41237d20e7ad",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "28b63a23-c9de-4b55-8824-b8ebaf649685",
          "0ff019f5-3231-4e8a-abc8-305f34e32574",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "caca3110-45c0-466f-9d3a-91acf92ceafc",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "bb225a94-7134-43f9-bb46-041b79b8934d",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "1698298a-6522-4832-b60e-d519981350d1",
          "492385c2-12e9-4abd-a36f-0e6330a9f15f",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "2314380c-9150-475d-a5d8-2f3831e76320",
          "8ed86dcb-e0fd-436c-a3a5-a4890067bbe4",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "7ad1a402-5534-4156-8eee-897991915638",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "95e43e97-0c6b-4c8f-976d-c17c474a1424",
          "d9953b27-89c2-4f3e-852f-b73651a19502",
          "56832134-c7d0-408f-97b9-3c08ee376c3b",
          "18547d31-bbf1-45fc-bb43-886a2cd0c056",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
          "242309ef-eff9-4d56-a7a5-bd5b9e5dd42c",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "DashingDerbyBrand",
        IsNew: false,
        DisplayResourceKey: "DashingDerby",
        UseBetVolumeService: false,
        AssetPath: "HorseSilks",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 1,
      },
      StartTimeAsWords: "20:46",
      TranslatedEventTypeName: "Horse Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "DashingDerby",
    },
    {
      ID: 72277963,
      FeedId: "7123774",
      Number: 9220,
      StartTime: "/Date(1757785500767)/",
      FinishTime: "/Date(1757785566767)/",
      EventTypeID: 19,
      EventTypeEnumName: "SmartPlayKeno",
      EventType: {
        EnumValue: 19,
        Value: 19,
        Name: "Keno",
        Abbreviation: "K",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "SmartPlayKeno",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: 1,
        MaxNumberOfPicks: 10,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 8,
        FeedGuids: [
          "4745f32c-ad41-4c75-a702-59f52a7baf6e",
          "3adb0880-7c93-4de7-9394-b3fc696a2b50",
          "10fc0c55-08f0-4334-aaa2-819f61226ea5",
          "cd562924-e274-4581-b5f1-96451ed9fd71",
          "4144ad85-725f-4199-be53-9b9ef154c7ab",
          "ec23d7a3-f150-4825-8507-983592e46155",
          "895349c2-de84-4f5a-9cf2-128adadd06d0",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "48a218b4-f7b1-4619-954e-48c65ec81898",
          "b464f189-cd8c-4db0-92a1-2f5ebf5c3b45",
          "59eb8ca4-0c47-4d71-a6d4-0bce326920bb",
          "d7a2c42a-6fe9-46a9-88a0-c0b8fe0ecd24",
          "3302bc47-455b-4abe-aa59-8dbf2f287149",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "81f1253f-b068-48b9-9b6f-aed3015498f0",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "3cc15e1f-66e5-4079-8cad-8cb7f148df6d",
          "c48d9b76-b30e-4ede-b14e-9a772db78f77",
          "083554d7-b190-4b9d-bb8e-727afc2e6f8e",
          "0b6c3d4d-41c0-4347-a9ed-7444fc1b5543",
          "4074b544-00f7-4027-beab-0849b8424a72",
          "442dbc12-1a5b-4663-b041-dc939dac9e78",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "9a3ced5e-adf4-4e35-aff0-d05439b461c7",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "28b63a23-c9de-4b55-8824-b8ebaf649685",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "127b04ec-6879-4762-9cf0-6fa17acc5c95",
          "d80b8b76-d412-47f8-9610-023247512414",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
          "f32d7161-3350-447b-bc6e-e202b5ba3b67",
          "fc83900e-d613-484b-9acd-4bbbbbd3da11",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "3dd3f721-74a9-4527-8ea9-6df167d27ba1",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "ece726d2-2bc3-4e58-b8e2-6e7620ba7735",
          "ef889a31-83c6-4aa1-930b-972bb9febc4d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "7d6745ba-e5a1-4585-801f-4ff38ad7a095",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "338c8307-c433-4991-9da2-e79a184313f3",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "0b0a99d8-425d-404e-9cfa-bbc052f0d349",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "9ffbe92f-f720-4f8e-a7ae-3985ce5bb58b",
          "1662a502-2297-4d62-b88f-fe6c7b5aa17f",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "da58d63d-45d1-4948-9013-92188425f722",
          "3a0240a3-16b1-497d-af39-837fa6f76653",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "a6b2b800-47a7-4f2d-9903-155873ee6a33",
          "98c6b7bd-65ee-47f9-9305-4af4e656a987",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "db494e7e-de01-4d2a-95a7-da493c3f9de7",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "3e4c1cd4-4892-4422-ad4c-c57976c0f563",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "1ea7f276-d969-495f-8410-41237d20e7ad",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "707586ad-7a5e-4aff-9e11-42331aaf29c5",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "538c722e-e773-410e-bbd6-d71b1bef4719",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "1698298a-6522-4832-b60e-d519981350d1",
          "492385c2-12e9-4abd-a36f-0e6330a9f15f",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "8ed86dcb-e0fd-436c-a3a5-a4890067bbe4",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "7ad1a402-5534-4156-8eee-897991915638",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "bbcd0bfc-9fae-4e8a-a046-de68a19b981e",
          "98716fae-623f-4023-89cd-88caab0af15e",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: true,
        AllowMarketConfig: false,
        EventTypeColor: "",
        DisplaySingleEvent: true,
        AllowMultiBet: false,
        LaunchURL: null,
        BrandNameResourceKey: "",
        IsNew: false,
        DisplayResourceKey: "SmartPlayKeno",
        UseBetVolumeService: false,
        AssetPath: null,
        VisionXEventEnum: "Keno",
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 19,
      },
      StartTimeAsWords: "20:45",
      TranslatedEventTypeName: "Keno",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "SmartPlayKeno",
    },
    {
      ID: 72277961,
      FeedId: "7123771",
      Number: 8221,
      StartTime: "/Date(1757785440790)/",
      FinishTime: "/Date(1757785460790)/",
      EventTypeID: 24,
      EventTypeEnumName: "SpinAndWin",
      EventType: {
        EnumValue: 24,
        Value: 24,
        Name: "Spin And Win",
        Abbreviation: "SW",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "SpinAndWin",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "SpinAndWinEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 9,
        FeedGuids: [
          "83f25d8d-f27b-48d7-a94a-ec70feceeb79",
          "10fc0c55-08f0-4334-aaa2-819f61226ea5",
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "4144ad85-725f-4199-be53-9b9ef154c7ab",
          "cb9325e1-bf02-471e-8bbe-47cdc20510b3",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "895349c2-de84-4f5a-9cf2-128adadd06d0",
          "ec23d7a3-f150-4825-8507-983592e46155",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "ef82ead9-97fe-4d4e-8753-2f87d893c171",
          "d25e635b-7b02-4451-85c8-85c7b35936a6",
          "dbf004a9-025b-4ebc-a891-0d2e93889e3c",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "27c9092d-f9ea-4714-8fe2-a44f52b62b67",
          "48a218b4-f7b1-4619-954e-48c65ec81898",
          "b464f189-cd8c-4db0-92a1-2f5ebf5c3b45",
          "ff934045-87cc-42c0-b584-1d94c9ba13a5",
          "59eb8ca4-0c47-4d71-a6d4-0bce326920bb",
          "d7a2c42a-6fe9-46a9-88a0-c0b8fe0ecd24",
          "3302bc47-455b-4abe-aa59-8dbf2f287149",
          "8e924d29-c1d7-4557-9097-1038f1946980",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "81f1253f-b068-48b9-9b6f-aed3015498f0",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "3cc15e1f-66e5-4079-8cad-8cb7f148df6d",
          "e5bb12df-e604-47e5-bac1-fa1496444a71",
          "fa3d9242-c7aa-4bcd-9b14-1b65433400ed",
          "083554d7-b190-4b9d-bb8e-727afc2e6f8e",
          "6d873510-172c-475a-9215-be1e08f9d308",
          "0b6c3d4d-41c0-4347-a9ed-7444fc1b5543",
          "442dbc12-1a5b-4663-b041-dc939dac9e78",
          "9a3ced5e-adf4-4e35-aff0-d05439b461c7",
          "0b8bea97-1a7c-4b9a-ab12-53fd21328d63",
          "a19a94ae-b2b0-45f3-9c81-20a3484404b1",
          "4074b544-00f7-4027-beab-0849b8424a72",
          "c48d9b76-b30e-4ede-b14e-9a772db78f77",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "28b63a23-c9de-4b55-8824-b8ebaf649685",
          "ad6735db-0413-4e3d-ac38-8bb8820a5a21",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "f32d7161-3350-447b-bc6e-e202b5ba3b67",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "127b04ec-6879-4762-9cf0-6fa17acc5c95",
          "d80b8b76-d412-47f8-9610-023247512414",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "543cd6c4-228a-48c8-aedb-45964a177de2",
          "2f60298f-b620-4366-82b2-d5ff75ffa32e",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
          "fc83900e-d613-484b-9acd-4bbbbbd3da11",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "3dd3f721-74a9-4527-8ea9-6df167d27ba1",
          "abfe0044-574e-439c-9184-594a70259717",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "ece726d2-2bc3-4e58-b8e2-6e7620ba7735",
          "ef889a31-83c6-4aa1-930b-972bb9febc4d",
          "30114259-ee3e-4766-a865-bc806fdf59bb",
          "7d6745ba-e5a1-4585-801f-4ff38ad7a095",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "00872d36-938e-4d22-9ea9-2d97bb7150e1",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "338c8307-c433-4991-9da2-e79a184313f3",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "0b0a99d8-425d-404e-9cfa-bbc052f0d349",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "9ffbe92f-f720-4f8e-a7ae-3985ce5bb58b",
          "1662a502-2297-4d62-b88f-fe6c7b5aa17f",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "da58d63d-45d1-4948-9013-92188425f722",
          "3a0240a3-16b1-497d-af39-837fa6f76653",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "a6b2b800-47a7-4f2d-9903-155873ee6a33",
          "98c6b7bd-65ee-47f9-9305-4af4e656a987",
          "fc2dbd41-b65b-40b9-9e17-5428e276f5e6",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "9623c4d9-5e24-4949-986a-bd1b532d1b12",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "db494e7e-de01-4d2a-95a7-da493c3f9de7",
          "b739a6bc-9f03-405e-8e39-3a6e7663b433",
          "fe747b62-1e93-4f7e-8664-4c11f0ed3884",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f2748a45-7c3c-4db9-8405-338322449226",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "1812fc0e-e259-4105-85fc-e7be3cc400dc",
          "2a1e16b7-cd11-4ebd-bdbd-ac73e4a97e94",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "3e4c1cd4-4892-4422-ad4c-c57976c0f563",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "1ea7f276-d969-495f-8410-41237d20e7ad",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "d6b7f25a-be48-4b15-afa9-5dd8ab0b331a",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "a1834f8c-230c-43d8-8e7b-2f6680f01abe",
          "9fd5e43c-21c5-4694-ba79-43bcb05efbe8",
          "1b70e7f5-0919-4409-bfdb-8642cb170f49",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "d5aa1954-7625-4826-88bf-ea3f6448008e",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "a82b9439-4f0b-46b6-b9be-0cf0c44b2916",
          "707586ad-7a5e-4aff-9e11-42331aaf29c5",
          "7db6fb65-f6ca-4813-91b2-2bea974d0b43",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "3b1c714f-3bb8-4842-8efe-b8728afdb2d2",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "809ea649-f898-4f07-b27b-8899d4218d2a",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "6e801374-5c93-444c-99f5-e124e0a236cb",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "52ce28fc-3ae1-4956-aecf-9b935b71b7b2",
          "eb1b4dd8-fe3f-411f-bffd-3fa95d529e10",
          "caca3110-45c0-466f-9d3a-91acf92ceafc",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "9f865855-48cb-42b5-a5ea-7570470ba97a",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9690d440-22c2-4f48-ba07-1a05af07eefe",
          "f0ac2f19-8aef-4fc4-a72f-0447774766f0",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4e3c4fb3-21e8-471f-a48d-48fc0be5d623",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "538c722e-e773-410e-bbd6-d71b1bef4719",
          "b9e1c2d0-6817-4509-9a91-67ec558b403d",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "e61c4fec-b585-4485-9388-045ce859f955",
          "1a5cfb87-d244-4db4-86fc-03fbcec6e755",
          "0ff019f5-3231-4e8a-abc8-305f34e32574",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "7d0358fb-9cfa-45a9-a992-24988a985050",
          "1698298a-6522-4832-b60e-d519981350d1",
          "492385c2-12e9-4abd-a36f-0e6330a9f15f",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "6614a91e-c788-4af8-9ef1-a3fb05fa1351",
          "43c09df3-c81f-465e-98be-2a8164d8d7a1",
          "3e8a6675-3f44-4166-b05c-ca7686083dcf",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "8ed86dcb-e0fd-436c-a3a5-a4890067bbe4",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "1bcc84c2-c7fc-4f12-b0d6-3bca6f901305",
          "7ad1a402-5534-4156-8eee-897991915638",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "d9953b27-89c2-4f3e-852f-b73651a19502",
          "bbcd0bfc-9fae-4e8a-a046-de68a19b981e",
          "21c6cce7-62c3-4772-80ad-b5cb5e94edfe",
          "98716fae-623f-4023-89cd-88caab0af15e",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "d16d52e7-4c9b-4e0a-8efe-cc8a3ed903ab",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 5,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: true,
        AllowMarketConfig: false,
        EventTypeColor: "",
        DisplaySingleEvent: true,
        AllowMultiBet: false,
        LaunchURL: null,
        BrandNameResourceKey: "",
        IsNew: false,
        DisplayResourceKey: "SpinAndWin",
        UseBetVolumeService: true,
        AssetPath: null,
        VisionXEventEnum: "SpinAndWin",
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 24,
      },
      StartTimeAsWords: "20:44",
      TranslatedEventTypeName: "Spin And Win",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "SpinAndWin",
    },
    {
      ID: 72277960,
      FeedId: "7123769",
      Number: 5429,
      StartTime: "/Date(1757785440637)/",
      FinishTime: "/Date(1757785515637)/",
      EventTypeID: 5,
      EventTypeEnumName: "CycleRacing",
      EventType: {
        EnumValue: 5,
        Value: 5,
        Name: "Cycle Racing",
        Abbreviation: "CR",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "CycleRacing",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "SlipStreamBrand",
        IsNew: false,
        DisplayResourceKey: "CycleRacing",
        UseBetVolumeService: false,
        AssetPath: "CyclistHelmets",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 5,
      },
      StartTimeAsWords: "20:44",
      TranslatedEventTypeName: "Track Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "CycleRacing",
    },
    {
      ID: 72277952,
      FeedId: "7123766",
      Number: 6430,
      StartTime: "/Date(1757785320970)/",
      FinishTime: "/Date(1757785402970)/",
      EventTypeID: 3,
      EventTypeEnumName: "HarnessRacing",
      EventType: {
        EnumValue: 3,
        Value: 3,
        Name: "Harness Racing",
        Abbreviation: "HR",
        IsActive: true,
        Selected: false,
        IsDefault: false,
        EnumName: "HarnessRacing",
        ParentEventTypeID: null,
        GroupEventTypeID: null,
        ChildEventTypeID: null,
        MinNumberOfPicks: null,
        MaxNumberOfPicks: null,
        EventVersion: "RaceEventVersion=2.0",
        IsGroupEventType: false,
        IsOnDemand: false,
        ODGSEnumValue: null,
        EventTypeCategoryEnumValue: 1,
        FeedGuids: [
          "cb9325e1-bf02-471e-8bbe-47cdc20510b3",
          "e92d0c1d-7a94-43ae-a292-58d7759faf67",
          "facc5fbf-e941-448e-bfea-a64165997318",
          "ef82ead9-97fe-4d4e-8753-2f87d893c171",
          "bc4ca371-d208-4f2e-9233-46bc7f5d3701",
          "605e8ce5-c6bb-40c8-a84b-4d6e6b039ca3",
          "151d12bb-5562-4dde-8262-55ba046a0914",
          "bc252eb8-5cc8-4c51-83f3-85d4c0354f2e",
          "d1029cc8-7054-4528-a0a3-f47568a9eb09",
          "aaf1f540-6713-4abf-8f95-71c487f3e5b8",
          "1698298a-6522-4832-b60e-d519981350d1",
          "075857b8-b802-4da0-92f6-2894c6869fc3",
          "2e120937-170d-4034-90fe-08b82ce6d90b",
          "cc6fa9f9-d9c2-41f4-ae2e-abf335f2986f",
          "014a7dd0-6510-4e17-98f5-730d464d264e",
          "a91ae4e1-d032-4b2c-8282-d3e84d0f2d0c",
          "244c175f-b000-446e-a499-e3ee2c0cfbdb",
          "550c7fa8-4d18-490b-a07f-ce34a7caf513",
          "5d86efe7-bc09-475b-8567-c912f6458a8a",
          "da58d63d-45d1-4948-9013-92188425f722",
          "5f2ec6e8-f2a5-45ed-9986-08436f2b4302",
          "435b1d53-b638-437d-a0bd-a7f2c27161c0",
          "4178c8c8-fd52-4d10-ad0e-9cba4efbcbfc",
          "de05c11d-0fd4-44c3-8895-af84128e0bc6",
          "fa49407f-faec-4f1a-aa14-e5a1962f702f",
          "f4486a30-a3f4-4d64-915f-f52e610fd5c2",
          "67e2485a-40a8-461e-8c6c-cc1295471e1e",
          "58a59df7-69d3-46b0-a3a4-6c2bd5bed341",
          "15d1e1e1-18b3-4117-addb-461ca186b7c8",
          "ea1f78ce-6838-41a8-9616-aac89ad6b722",
          "9c9ed8a4-e371-4608-89da-14f0ec0465a0",
          "3116192d-c56c-4af5-9fb5-2a504d0db64d",
          "2972382d-95ba-4c7a-b05b-bf8f0906d523",
          "0096e945-c35a-4d6e-ab6a-92b35fe81c62",
          "6fe0ce30-a94a-4d34-a99d-5232d18d625d",
          "9437e3c2-7edb-48be-801f-fc9364ed8924",
          "af313d14-8ba3-498c-9ed9-9af6119e4065",
          "a826cbf2-e97d-4a6a-8c91-7c164c687e7e",
          "bd9b924d-4843-4de5-ba02-e2ab9621271b",
          "56436132-9358-4e01-8238-2f4f32d0aedb",
          "6bb01711-46fa-4dca-8a1c-a8f4744a59fa",
          "a841e4db-28f5-4a7e-805d-8546cc99ad06",
          "80209633-5bcb-4d51-b38a-df768fa48c83",
          "21d30e1a-226d-4c6b-8acc-945764b57efe",
          "19fa53f5-6206-4119-870a-4a9ee388f167",
          "014ac7eb-dead-4dce-b5ad-4743a325dd5c",
          "e7a9ccf8-78c3-477f-859c-68f1800663e3",
          "5dadba31-688a-4508-a29c-8dae0bcff0f5",
          "a2446704-2986-44d4-8d69-7fd3ecbfb22a",
          "d80b8b76-d412-47f8-9610-023247512414",
          "e4d686d9-4373-4ebb-bd41-30afa0cb7662",
          "46965732-3668-4508-9d90-9c52b4bcd6cd",
          "8219662d-6064-43fe-be5f-0c1b9fe35517",
          "d1b980bb-4bb6-4ed5-848a-e986b2f80451",
          "2ea94665-5254-4356-98da-75c6c606ddd5",
          "c9f4fa35-78b6-47fa-9888-852e9690ea7d",
          "64f15972-f21a-40c8-9dc2-74ee6e82c507",
          "dca4a617-bf6a-459a-bb50-4f5f31b0c685",
          "5bb83ab8-2434-47f1-83cc-25e0397e51e3",
          "3c778ee7-5982-4293-86ec-8825c6490c2c",
          "d90df84a-b7b6-4976-a54b-b94c06e6d45e",
          "4816ebac-c028-48f4-ba1a-f18b15e481a6",
          "69abc9d1-e00f-46f9-91f8-511e94ac9de1",
          "78a4b2b6-af74-48a6-86fa-2cd78d6eb303",
          "a4d2629f-4b7c-4c26-bf27-c04fb2450098",
          "edf4a033-1112-4bfb-8d8f-ac89af61d0c0",
          "89beeded-4b52-4ff7-85b2-a222adc53793",
          "261ebb4c-0b15-4094-a868-8fd4ebff569d",
          "75017aeb-c227-493e-beed-9f46e9dd3e28",
          "a66aa1de-2154-4484-b67c-e18d9328c632",
          "9a1932bc-763e-4d45-90c8-b8824481b89f",
          "3be88931-d269-4f08-b7a7-a2f99cfd53e5",
          "a323c15e-933e-496d-9ca8-a37f1c281fcd",
          "958b59e4-f761-45db-b1b7-def9b69f4627",
          "ccd1ff18-0abf-4019-8e29-b774e80eca29",
          "ce350388-d332-4aa3-8120-8f5a3ba70837",
          "6cb9a954-38fc-401b-8aca-ac8c6e330b28",
          "bfaada2d-142d-4555-9cdf-0b0a1b988111",
          "2cf36003-5457-4d6f-9426-a05d5c1416d6",
          "5c7dfa1a-bbda-47c0-b0d2-27fa629bf624",
          "fca9845c-6edb-4325-952c-8b48365d7694",
          "84376089-1ced-4376-93c3-1fe81d5dd59a",
          "0cd7c799-39de-4cc1-849d-a453284e7135",
          "c30ef38e-379b-4e23-8757-a91f912d872b",
        ],
        UseFeedPayouts: false,
        BetClosePeriodBeforeStartTime: 0,
        PreviousEventCount: 1,
        NextEventCount: 10,
        IsVisionXEnabled: false,
        AllowMarketConfig: true,
        EventTypeColor: "",
        DisplaySingleEvent: false,
        AllowMultiBet: true,
        LaunchURL: null,
        BrandNameResourceKey: "ChargingChariotsBrand",
        IsNew: false,
        DisplayResourceKey: "HarnessRacing",
        UseBetVolumeService: false,
        AssetPath: "HorseSilks",
        VisionXEventEnum: null,
        IsMultipleURL: false,
        IsExternalAuth: false,
        ID: 3,
      },
      StartTimeAsWords: "20:42",
      TranslatedEventTypeName: "Harness Racing",
      FeedGUID: "00000000-0000-0000-0000-000000000000",
      EventTypeCategoryEnumValue: 0,
      EventTypeDisplayResourceKey: "HarnessRacing",
    },
  ],
  Total: 1091,
  AggregateResults: null,
  Errors: null,
});

const totals = props.balanceData.reduce(
  (acc, item) => {
    acc.bets += item.stake;

    if (item.isCancelled === 1) {
      acc.cancellations += item.stake;
    }

    if (item.isRedeemed === 1) {
      acc.redeemed += item.stake * item.odd;
    }

    return acc;
  },
  { bets: 0, cancellations: 0, redeemed: 0 }
);
const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "L", 0, ""];

function startDrag(e) {
  if (isResizing.value) return;
  isDragging.value = true;
  const rect = modalRef.value.getBoundingClientRect();
  offsetX.value = e.clientX - rect.left;
  offsetY.value = e.clientY - rect.top;
}

function onDrag(e) {
  if (isDragging.value) {
    modalRef.value.style.left = `${e.clientX - offsetX.value}px`;
    modalRef.value.style.top = `${e.clientY - offsetY.value}px`;
  } else if (isResizing.value) {
    const rect = modalRef.value.getBoundingClientRect();
    if (resizeDir.value.includes("right")) {
      modalRef.value.style.width = `${e.clientX - rect.left}px`;
    }
    if (resizeDir.value.includes("bottom")) {
      modalRef.value.style.height = `${e.clientY - rect.top}px`;
    }
    if (resizeDir.value.includes("left")) {
      const diff = e.clientX - rect.left;
      modalRef.value.style.width = `${rect.width - diff}px`;
      modalRef.value.style.left = `${rect.left + diff}px`;
    }
    if (resizeDir.value.includes("top")) {
      const diff = e.clientY - rect.top;
      modalRef.value.style.height = `${rect.height - diff}px`;
      modalRef.value.style.top = `${rect.top + diff}px`;
    }
  }
}

function stopActions() {
  isDragging.value = false;
  isResizing.value = false;
  resizeDir.value = null;
}

function startResize(e, dir) {
  isResizing.value = true;
  resizeDir.value = dir;
  e.stopPropagation();
}

function getCurrentDateTime() {
  const now = new Date();

  const pad = (num) => String(num).padStart(2, "0");

  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1); // months are 0-based
  const year = now.getFullYear();

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());

  return {
    date: `${day}/${month}/${year}`,
    time: `${hours}:${minutes}`,
  };
}

function formatDate(d) {
  const iso = "2025-09-10T07:21:52.000Z";
  const date = new Date(d);

  const formatted =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");

  return formatted;
}

function passZReport(date) {
  emit("printZReport", date);
}

function formatMSDate(msDate) {
  // Extract number from "/Date(1757785800830)/"
  const timestamp = parseInt(msDate.match(/\d+/)[0], 10);
  const date = new Date(timestamp);

  const pad = (n) => n.toString().padStart(2, "0");

  return (
    date.getFullYear() +
    "/" +
    pad(date.getMonth() + 1) +
    "/" +
    pad(date.getDate()) +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
}

// Example:
console.log(formatMSDate("/Date(1757785800830)/"));
// → "2025/09/14 00:10:00"

onMounted(() => {
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopActions);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopActions);
});
</script>

<template>
  <div
    v-if="showCashierModal"
    class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
  >
    <div
      ref="modalRef"
      class="absolute bg-white shadow-lg rounded min-w-[250px] min-h-[150px] overflow-auto"
      style="
        animation: scaleIn 0.5s ease-out forwards;
        width: 98vw;
        height: 95vh;
      "
    >
      <div
        class="bg-[#37b34a] text-white px-3 py-2 rounded-t-md flex justify-between items-center"
        @mousedown="startDrag"
      >
        <span class="font-roboto">{{ title }} </span>
        <button
          @click="
            $emit('close');
            mainTab = 'report';
            secondTab = 'cash';
          "
          class="fill-[#bfbfbf] text-[#1f652a] hover:fill-[#57BF67] hover:text-[#818382]"
        >
          <CloseIcon />
        </button>
      </div>

      <div class="p-4 h-[calc(100%-40px)] overflow-auto relative">
        <div
          class="text-[#37b34a] text-lg font-roboto flex justify-end gap-1 items-center tracking-wide"
        >
          <span class="">Cash Balance:</span>
          <span class="font-bold"> Br {{ balance.toFixed(2) }}</span>
          <div
            class="px-2 py-1 rounded-md border border-[#37b34a] cursor-pointer hover:bg-[#F1FBF2]"
            @click="$emit('refreshBalance')"
          >
            <svg
              viewBox="0 0 512 512"
              width="15"
              height="15"
              class="fill-current text-[#37b34a]"
            >
              <path
                d="M480 288c0 123.7-100.3 224-224 224S32 411.7 32 288 132.3 64 256 64V0l160 96-160 96v-64c-88.2 0-160 71.8-160 160s71.8 160 160 160 160-71.8 160-160c0-29.1-7.8-56.4-21.5-80l55.5-32c19.1 32.9 30 71.2 30 112"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="w-full h-full flex flex-col justify-start items-start mt-3"
          style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif"
        >
          <div class="flex justify-between gap-1 w-full">
            <div class="flex gap-1">
              <div
                @click="mainTab = 'report'"
                class="px-2.5 py-1 rounded-t text-sm cursor-pointer border border-[#C3E8C8] transition-colors duration-300"
                :class="mainTab === 'report' ? 'bg-[#37b34a]' : ''"
              >
                Reports
              </div>
              <div
                @click="mainTab = 'result'"
                class="border px-2.5 py-1 rounded-t text-sm cursor-pointer border-[#C3E8C8] transition-colors duration-300"
                :class="mainTab === 'result' ? 'bg-[#37b34a]' : ''"
              >
                Event Result Search
              </div>
            </div>

            <div
              @click="mainTab = 'password'"
              class="border border-[#C3E8C8] transition-colors duration-300 px-2.5 py-1 rounded-t text-sm cursor-pointer"
              :class="mainTab === 'password' ? 'bg-[#37b34a]' : ''"
            >
              Change Password
            </div>
          </div>
          <div
            v-if="mainTab === 'report'"
            class="w-full mb-2 border border-[#37b34a] py-4 px-4"
          >
            <div class="flex justify-between gap-1 w-full">
              <div class="flex gap-1">
                <div
                  @click="secondTab = 'cash'"
                  class="px-2.5 py-1 rounded-t text-sm cursor-pointer border border-[#C3E8C8] transition-colors duration-300"
                  :class="secondTab === 'cash' ? 'bg-[#37b34a]' : ''"
                >
                  Cash Summary
                </div>
                <div
                  @click="
                    secondTab = 'recall';
                    $emit('getRecallBets');
                  "
                  class="px-2.5 py-1 rounded-t text-sm cursor-pointer border border-[#C3E8C8] transition-colors duration-300"
                  :class="secondTab === 'recall' ? 'bg-[#37b34a]' : ''"
                >
                  Recall Bets
                </div>
              </div>
            </div>
            <div class="w-full border border-[#37b34a] py-4 px-4">
              <div
                v-if="secondTab === 'cash'"
                class="w-full border-[1px] border-[#D5D5D5] py-4 px-0"
              >
                <div class="flex gap-8 ml-4">
                  <div
                    class="relative w-full max-w-xs flex flex-col items-start justify-start gap-1"
                  >
                    <span class="text-xs font-semibold text-center"
                      >From Date</span
                    >
                    <DateTimePicker />
                  </div>
                  <div
                    class="relative w-full max-w-xs flex flex-col items-start justify-start gap-1"
                  >
                    <span class="text-xs font-semibold text-center"
                      >To Date</span
                    >
                    <DateTimePicker />
                  </div>
                </div>

                <div class="w-full flex justify-start text-[#37b34a] mt-4 ml-4">
                  <RefreshButton @click="$emit('getBalanceData')" />
                </div>

                <BalanceTable
                  :balanceData="balanceData"
                  :balanceDataLoader="balanceDataLoader"
                  @printZReport="passZReport"
                />
              </div>

              <div
                v-if="secondTab === 'recall'"
                class="w-full border-[1px] border-[#D5D5D5]py-4"
              >
                <div class="ml-4 flex flex-col">
                  <UserSelect v-model="selectedUser" :options="users" />
                </div>

                <div
                  class="w-full flex justify-start text-[#37b34a] mt-0 ml-4 mb-2"
                >
                  <RefreshButton @click="$emit('getRecallBets')" />
                </div>

                <table
                  class="min-w-full border border-gray-100 divide-y text-xs"
                >
                  <thead class="">
                    <tr>
                      <th
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Retail User
                      </th>
                      <th
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Date
                      </th>
                      <th
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Stake
                      </th>
                      <th
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Description
                      </th>
                      <th
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <div
                      v-if="recallBetLoader"
                      class="w-full absolute flex items-center justify-center bg-opacity-20"
                    >
                      <img
                        src="../assets/images/loading-image.gif"
                        alt="Loading..."
                      />
                    </div>
                    <tr
                      v-if="recallBets.length > 0 && !recallBetLoader"
                      v-for="b in recallBets"
                      class="border-b hover:bg-[#C5BDB9]"
                    >
                      <td
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        {{ b.user }}
                      </td>
                      <td
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        {{ formatDate(b.createdAt) }}
                      </td>
                      <td
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Br {{ b.stake.toFixed(2) }}
                      </td>
                      <td
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        Single, {{ b.game }} {{ b.gameId }}
                      </td>
                      <td
                        class="px-4 py-2 text-left font-medium border-r truncate"
                      >
                        <PrintIcon @click="$emit('copyTicket', b.ticketId)" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            v-if="mainTab === 'result'"
            class="w-full border border-[#37b34a] py-4 px-4"
          >
            <div class="flex gap-8 ml-4">
              <div
                class="relative w-full max-w-xs flex flex-col items-start justify-start gap-1"
              >
                <span class="text-xs font-semibold text-center">From Date</span>
                <DateTimePicker />
              </div>
              <div
                class="relative w-full max-w-xs flex flex-col items-start justify-start gap-1"
              >
                <span class="text-xs font-semibold text-center">To Date</span>
                <DateTimePicker />
              </div>

              <div
                class="relative w-full max-w-xs flex flex-col items-start justify-start gap-1"
              >
                <span class="text-xs font-semibold text-center">Event No</span>
                <input
                  type="text"
                  class="border border-gray-300 rounded px-1 text-xs w-full py-1"
                />
              </div>
            </div>
            <div
              class="w-full flex justify-start gap-2 text-[#37b34a] mt-4 ml-4 mb-2"
            >
              <RefreshButton @click="$emit('getRecallBets')" />

              <div
                class="text-xs border border-[#37b34a] px-2.5 py-1 rounded flex gap-1 text-[#333] cursor-pointer hover:bg-[#F1FBF2]"
                @click="$emit('getRecallBets')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#37b34a"
                  class="text-[#37b34a]"
                >
                  <!-- Outer circle -->
                  <path
                    d="M8 3a5 5 0 1 0 4.546 2.914"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  ></path>

                  <!-- Arrow head -->
                  <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"
                    fill="#37b34a"
                    class="text-[#37b34a]"
                  />
                </svg>
                Export To Excel
              </div>
            </div>

            <table class="min-w-full border border-gray-100 divide-y text-xs">
              <thead class="">
                <tr>
                  <th class="px-4 py-2 text-left font-medium border-r truncate">
                    Game
                  </th>
                  <th class="px-4 py-2 text-left font-medium border-r truncate">
                    Feed ID
                  </th>
                  <th class="px-4 py-2 text-left font-medium border-r truncate">
                    Event No
                  </th>
                  <th class="px-4 py-2 text-left font-medium border-r truncate">
                    Date
                  </th>
                  <th
                    class="px-4 py-2 text-left font-medium border-r truncate"
                  ></th>
                  <th
                    class="px-4 py-2 text-left font-medium border-r truncate"
                  ></th>
                </tr>
              </thead>
              <tbody class="">
                <div
                  v-if="resultLoader"
                  class="w-full absolute flex items-center justify-center bg-opacity-20"
                >
                  <img
                    src="../assets/images/loading-image.gif"
                    alt="Loading..."
                  />
                </div>
                <tr
                  v-if="resultData.Data.length > 0 && !resultLoader"
                  v-for="b in resultData.Data"
                  class="border-b hover:bg-[#C5BDB9]"
                >
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    {{ b.EventTypeEnumName }}
                  </td>
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    {{ b.FeedId }}
                  </td>
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    {{ b.Number }}
                  </td>
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    {{ formatMSDate(b.StartTime) }}
                  </td>
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    <div
                      class="border border-[#37b34a] rounded px-1.5 py-2.5] cursor-pointer hover:bg-[#F0FAF2] py-1 w-[70px] flex justify-center bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 120"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M10 60 C40 10, 160 10, 190 60 C160 110, 40 110, 10 60 Z"
                          fill="#fff"
                          stroke="#53ca65"
                          stroke-width="14"
                        />
                        <circle cx="100" cy="60" r="40" fill="#53ca65" />
                        <circle cx="92" cy="52" r="10" fill="#fff" />
                      </svg>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-left font-medium border-r truncate">
                    <div
                      @click="$emit('copyTicket', b.ticketId)"
                      class="border border-[#37b34a] rounded px-1.5 py-2.5] cursor-pointer hover:bg-[#F0FAF2] py-1 w-[70px] flex justify-center bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#37b34a"
                        class="bi bi-printer"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        <path
                          d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="mainTab === 'password'"
            class="w-full border border-[#37b34a] py-4 px-4 flex flex-col gap-2"
          >
            <div class="flex justify-start gap-10 text-sm">
              <div class="flex-1 font-semibold">Current Password</div>
              <div class="flex-1">
                <input
                  type="text"
                  class="border border-[#37b34a] rounded px-1 text-xs w-[180px] py-1"
                />
              </div>
            </div>
            <div class="flex justify-start gap-10 text-sm">
              <div class="flex-1 font-semibold">New Password</div>
              <div class="flex-1">
                <input
                  type="text"
                  class="border border-[#37b34a] rounded px-1 text-xs w-[180px] py-1"
                />
              </div>
            </div>
            <div class="flex justify-start gap-10 text-sm">
              <div class="flex-1 font-semibold">Confirm Password</div>
              <div class="flex-1">
                <input
                  type="text"
                  class="border border-[#37b34a] rounded px-1 text-xs w-[180px] py-1"
                />
              </div>
            </div>
            <div
              class="font-roboto bg-[#37b34a] border border-[#37b34a] py-1.5 rounded flex justify-center items-center text-white cursor-pointer hover:bg-[#2B8C3A] px-2 w-16 text-sm"
            >
              Enter
            </div>
          </div>
        </div>
      </div>

      <!-- Resize handles -->
      <div
        class="absolute top-0 left-0 w-2 h-full cursor-w-resize"
        @mousedown="startResize($event, 'left')"
      ></div>
      <div
        class="absolute top-0 right-0 w-2 h-full cursor-e-resize"
        @mousedown="startResize($event, 'right')"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-2 cursor-n-resize"
        @mousedown="startResize($event, 'top')"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full h-2 cursor-s-resize"
        @mousedown="startResize($event, 'bottom')"
      ></div>

      <!-- Corners -->
      <div
        class="absolute top-0 left-0 w-3 h-3 cursor-nw-resize"
        @mousedown="startResize($event, 'top left')"
      ></div>
      <div
        class="absolute top-0 right-0 w-3 h-3 cursor-ne-resize"
        @mousedown="startResize($event, 'top right')"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize"
        @mousedown="startResize($event, 'bottom left')"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize"
        @mousedown="startResize($event, 'bottom right')"
      ></div>
    </div>
  </div>
</template>

<style>
@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    /* transform: scale(0.8); */
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
