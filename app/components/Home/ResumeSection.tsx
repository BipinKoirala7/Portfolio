function ResumeSection() {
  return (
    <div className="min-h-50 flex items-center justify-center">
      <p className="text-h3 font-bold">
        Check Out my
        <a
          href=""
          download={"/my_avatar.jpg"}
          className="text-accent-2 border-b-4 border-text-accent-2 px-1 ml-1"
        >
          resume
        </a>
      </p>
    </div>
  );
}

export default ResumeSection;
