const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:no-underline"
    >
      انتقل إلى المحتوى الرئيسي
    </a>
  );
};

export default SkipLink;