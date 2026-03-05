type DownloadButtonProps = {
  label: string;
  className?: string;
};

const APK_PATH = "/release/mayak.apk";

function DownloadButton({ label, className }: DownloadButtonProps) {
  return (
    <a className={`download-btn ${className ?? ""}`.trim()} href={APK_PATH} download>
      {label}
    </a>
  );
}

export default DownloadButton;
