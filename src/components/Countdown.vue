<!-- <script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  timestamp: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["finished"]);

const now = ref(Date.now());
let intervalId = null;

const diffInSeconds = computed(() => {
  return Math.max(0, Math.floor((props.timestamp - now.value) / 1000));
});

const formattedCountdown = computed(() => {
  const minutes = Math.floor(diffInSeconds.value / 60);
  const seconds = diffInSeconds.value % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
});

const isFinished = computed(() => diffInSeconds.value <= 0);

// 🔥 Watch for when timer finishes
watch(isFinished, (finished) => {
  if (finished) {
    emit("finished");
    if (intervalId) clearInterval(intervalId); // stop interval
  }
});

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <span
    class="bg-[#FFFF00] text-black text-[.7em] w-full flex justify-center items-center font-roboto tracking-widest rounded-tr-sm rounded-br-sm shadow-sm shadow-gray-700"
  >
    {{
      isFinished ? "00:00" : diffInSeconds > 3600 ? "60+" : formattedCountdown
    }}
  </span>
</template> -->

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  timestamp: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["finished"]);

const now = ref(Date.now());
let rafId = null;

const updateNow = () => {
  now.value = Date.now();
};

const diffInSeconds = computed(() =>
  Math.max(0, Math.floor((props.timestamp - now.value) / 1000))
);

const formattedCountdown = computed(() => {
  const minutes = Math.floor(diffInSeconds.value / 60);
  const seconds = diffInSeconds.value % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
});

const isFinished = computed(() => diffInSeconds.value <= 0);

watch(isFinished, (finished) => {
  if (finished) {
    emit("finished");
    if (rafId) cancelAnimationFrame(rafId);
  }
});

const handleVisibilityChange = () => {
  if (!document.hidden) {
    // Force immediate update on tab becoming visible
    updateNow();
    // Resume ticking if not finished
    if (!isFinished.value) tick();
  } else {
    // Pause animation while hidden to save resources
    if (rafId) cancelAnimationFrame(rafId);
  }
};

const tick = () => {
  updateNow();
  if (!isFinished.value) {
    rafId = requestAnimationFrame(tick);
  }
};

onMounted(() => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
  tick(); // Start the animation loop
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <span
    class="bg-[#FFFF00] text-black text-[.7em] w-full flex justify-center items-center font-roboto tracking-widest rounded-tr-sm rounded-br-sm shadow-sm shadow-gray-700"
  >
    {{
      isFinished ? "00:00" : diffInSeconds > 3600 ? "60+" : formattedCountdown
    }}
  </span>
</template>
