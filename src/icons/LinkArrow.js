const LinkArrow = () => {
  return (
    <>
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="rgba(255, 255, 255, 0)"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
          d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
      </svg>
    </>
  );
};

export default LinkArrow;
