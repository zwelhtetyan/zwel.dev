/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  SunMedium,
  MoonStarIcon,
  User,
  Flame,
  Send,
  type Icon as LucideIcon,
  Menu,
} from "lucide-react";
import { ComponentProps } from "react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: MoonStarIcon,
  user: User,
  flame: Flame,
  send: Send,
  menu: Menu,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  bear: (props: { className?: ComponentProps<"img">["className"] }) => (
    <img
      src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Panda.png"
      alt="Bear"
      width={26}
      height={26}
      {...props}
    />
  ),
  wavingHand: (props: { className?: ComponentProps<"img">["className"] }) => (
    <img
      src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
      alt="waving hand"
      width={26}
      height={26}
      {...props}
    />
  ),
  javascript: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...className}
    >
      <rect width="256" height="256" rx="60" fill="#F0DB4F" />
      <path
        d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93"
        fill="#323330"
      />
      <path
        d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354"
        fill="#323330"
      />
    </svg>
  ),
  typescript: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" fill="#007ACC" rx="60" />
      <path
        fill="#fff"
        d="M56.6112 128.849L56.5299 139.333H73.1902H89.8505L89.8505 186.673V234.012H101.635H113.419V186.673L113.419 139.333H130.079H146.739V129.052C146.739 123.363 146.618 118.609 146.455 118.487C146.333 118.325 126.056 118.243 101.472 118.284L56.7331 118.406L56.6112 128.849Z"
      />
      <path
        fill="#fff"
        d="M206.567 118.108C213.068 119.734 218.026 122.619 222.577 127.332C224.934 129.852 228.428 134.444 228.713 135.541C228.794 135.866 217.66 143.343 210.915 147.528C210.671 147.691 209.695 146.634 208.598 145.009C205.307 140.214 201.853 138.141 196.57 137.776C188.809 137.247 183.811 141.311 183.852 148.097C183.852 150.088 184.136 151.266 184.949 152.892C186.655 156.427 189.825 158.54 199.781 162.847C218.107 170.731 225.949 175.932 230.826 183.327C236.271 191.576 237.49 204.742 233.792 214.535C229.729 225.181 219.651 232.414 205.469 234.812C201.081 235.584 190.678 235.462 185.965 234.609C175.684 232.78 165.932 227.701 159.918 221.037C157.561 218.436 152.969 211.65 153.254 211.162C153.375 211 154.432 210.35 155.61 209.659C156.748 209.009 161.056 206.53 165.119 204.173L172.474 199.906L174.018 202.182C176.172 205.473 180.885 209.984 183.73 211.487C191.897 215.795 203.113 215.185 208.639 210.228C210.996 208.074 211.971 205.839 211.971 202.548C211.971 199.581 211.605 198.281 210.061 196.046C208.07 193.202 204.007 190.804 192.466 185.806C179.26 180.117 173.571 176.582 168.37 170.974C165.363 167.724 162.518 162.522 161.34 158.174C160.365 154.558 160.121 145.496 160.893 141.839C163.615 129.08 173.246 120.181 187.143 117.539C191.654 116.686 202.137 117.011 206.567 118.108Z"
      />
    </svg>
  ),
  reactjs: (className: { className?: ComponentProps<"svg">["className"] }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        fill="#00D8FF"
        d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"
      />
      <path
        fill-rule="evenodd"
        stroke="#00D8FF"
        stroke-width="8.911"
        d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        stroke="#00D8FF"
        stroke-width="8.911"
        d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        stroke="#00D8FF"
        stroke-width="8.911"
        d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  nextjs: (className: { className?: ComponentProps<"svg">["className"] }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        className="fill-icon"
        d="M121.451 28.0537C121.021 28.0928 119.652 28.2297 118.42 28.3274C90.0137 30.8885 63.4057 46.216 46.5533 69.7742C37.1691 82.8729 31.1672 97.7312 28.8993 113.469C28.0978 118.963 28 120.586 28 128.034C28 135.483 28.0978 137.106 28.8993 142.599C34.3343 180.155 61.0596 211.71 97.306 223.401C103.797 225.493 110.639 226.92 118.42 227.78C121.451 228.112 134.549 228.112 137.58 227.78C151.011 226.294 162.389 222.971 173.611 217.242C175.331 216.363 175.664 216.128 175.429 215.933C175.273 215.815 167.941 205.981 159.144 194.095L143.152 172.492L123.112 142.834C112.086 126.529 103.015 113.195 102.936 113.195C102.858 113.176 102.78 126.353 102.741 142.443C102.682 170.615 102.663 171.749 102.311 172.413C101.803 173.371 101.412 173.762 100.59 174.193C99.9648 174.505 99.4174 174.564 96.4653 174.564H93.0831L92.1838 173.997C91.5973 173.626 91.1672 173.137 90.8739 172.57L90.4633 171.69L90.5024 132.492L90.5611 93.2737L91.1672 92.5112C91.48 92.1007 92.1447 91.5728 92.6139 91.3186C93.4154 90.9276 93.7283 90.8885 97.1105 90.8885C101.099 90.8885 101.763 91.0449 102.8 92.1789C103.093 92.4917 113.943 108.836 126.925 128.523C139.906 148.21 157.658 175.092 166.377 188.288L182.213 212.277L183.015 211.749C190.111 207.135 197.619 200.566 203.562 193.723C216.211 179.197 224.364 161.485 227.101 142.599C227.902 137.106 228 135.483 228 128.034C228 120.586 227.902 118.963 227.101 113.469C221.666 75.913 194.94 44.3587 158.694 32.6676C152.301 30.5953 145.498 29.1681 137.873 28.3079C135.996 28.1124 123.073 27.8973 121.451 28.0537ZM162.389 88.5425C163.327 89.0117 164.09 89.911 164.364 90.8494C164.52 91.3577 164.559 102.228 164.52 126.724L164.461 161.876L158.264 152.374L152.047 142.873V117.321C152.047 100.801 152.125 91.5141 152.242 91.0645C152.555 89.9697 153.239 89.1095 154.178 88.6011C154.979 88.1906 155.273 88.1515 158.342 88.1515C161.236 88.1515 161.744 88.1906 162.389 88.5425Z"
      />
    </svg>
  ),
  tailwindCSS: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" fill="" rx="60" className="fill-iconBg" />
      <path
        fill="url(#paint0_linear_2_119)"
        fillRule="evenodd"
        d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_119"
          x1="86.5"
          x2="163.5"
          y1="74"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32B1C1" />
          <stop offset="1" stopColor="#14C6B7" />
        </linearGradient>
      </defs>
    </svg>
  ),
  materialUI: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        fill="#007FFF"
        fill-rule="evenodd"
        d="M192.031 157.671C192.823 157.216 193.482 156.561 193.941 155.771C194.4 154.981 194.643 154.084 194.646 153.171L194.74 123.03C194.742 122.117 194.986 121.22 195.445 120.43C195.903 119.64 196.562 118.985 197.354 118.53L213.693 109.145C214.485 108.69 215.382 108.452 216.295 108.453C217.208 108.455 218.105 108.696 218.895 109.154C219.686 109.611 220.342 110.268 220.798 111.059C221.254 111.85 221.495 112.747 221.495 113.661V168.457C221.495 169.374 221.253 170.273 220.794 171.066C220.335 171.859 219.675 172.517 218.88 172.973L157.219 208.39C156.431 208.842 155.539 209.08 154.631 209.081C153.723 209.082 152.83 208.845 152.042 208.395L103.651 180.718C102.854 180.262 102.191 179.605 101.73 178.811C101.269 178.017 101.026 177.115 101.026 176.197V148.567C101.026 148.536 101.063 148.515 101.094 148.53C101.12 148.546 101.156 148.53 101.156 148.494V148.463C101.156 148.442 101.167 148.421 101.188 148.411L141.042 125.515C141.078 125.494 141.062 125.437 141.021 125.437C141.01 125.437 140.999 125.432 140.991 125.424C140.984 125.417 140.979 125.406 140.979 125.395L141.057 98.3064C141.061 97.3904 140.823 96.4896 140.367 95.6949C139.912 94.9003 139.254 94.2399 138.462 93.7803C137.67 93.3207 136.77 93.0782 135.854 93.0773C134.938 93.0764 134.038 93.3171 133.245 93.7751L103.625 110.843C102.834 111.298 101.938 111.538 101.026 111.538C100.114 111.538 99.2176 111.298 98.4271 110.843L68.7135 93.7335C67.9219 93.2776 67.0243 93.038 66.1109 93.0387C65.1974 93.0393 64.3001 93.2802 63.5092 93.7372C62.7182 94.1941 62.0613 94.8511 61.6045 95.6421C61.1476 96.4331 60.9068 97.3304 60.9063 98.2439V147.202C60.9069 148.115 60.6677 149.011 60.2128 149.802C59.7578 150.593 59.1031 151.251 58.314 151.709C57.525 152.168 56.6293 152.411 55.7168 152.414C54.8043 152.417 53.9069 152.181 53.1146 151.728L36.625 142.301C35.8263 141.845 35.1627 141.185 34.7016 140.389C34.2405 139.594 33.9985 138.69 34 137.77L34.1458 52.197C34.1478 51.2847 34.3894 50.389 34.8464 49.5994C35.3033 48.8098 35.9597 48.1541 36.7497 47.698C37.5397 47.2418 38.4357 47.0011 39.348 47C40.2603 46.9989 41.1568 47.2375 41.9479 47.6918L98.4323 80.1345C99.2216 80.5878 100.116 80.8263 101.026 80.8263C101.936 80.8263 102.831 80.5878 103.62 80.1345L160.089 47.6918C160.881 47.2368 161.779 46.9982 162.692 47C163.606 47.0018 164.503 47.2438 165.294 47.7019C166.084 48.1599 166.74 48.8178 167.196 49.6096C167.652 50.4013 167.891 51.299 167.891 52.2126V137.806C167.891 138.722 167.65 139.622 167.192 140.414C166.734 141.207 166.075 141.865 165.281 142.322L135.708 159.353C134.914 159.811 134.255 160.471 133.797 161.265C133.339 162.059 133.099 162.961 133.101 163.878C133.103 164.794 133.347 165.694 133.809 166.487C134.27 167.279 134.933 167.935 135.729 168.39L152.042 177.676C152.83 178.125 153.722 178.36 154.629 178.358C155.536 178.356 156.427 178.118 157.214 177.666L192.031 157.671V157.671ZM195.453 80.8897C195.454 81.8108 195.699 82.7152 196.163 83.5107C196.627 84.3062 197.294 84.9644 198.096 85.4182C198.897 85.8719 199.805 86.1049 200.726 86.0935C201.647 86.0821 202.548 85.8267 203.339 85.3532L218.964 75.9782C219.735 75.5161 220.373 74.862 220.817 74.0798C221.261 73.2976 221.494 72.4139 221.495 71.5147V52.4105C221.493 51.4899 221.247 50.5862 220.783 49.7914C220.318 48.9966 219.651 48.3391 218.85 47.886C218.048 47.4329 217.141 47.2003 216.221 47.2119C215.3 47.2236 214.399 47.479 213.609 47.9522L197.984 57.3272C197.213 57.7894 196.574 58.4434 196.131 59.2256C195.687 60.0078 195.454 60.8915 195.453 61.7908V80.8949V80.8897Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  redux: (className: { className?: ComponentProps<"svg">["className"] }) => (
    <svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...className}
    >
      <rect width="256" height="256" rx="60" fill="#764ABC" />
      <path
        d="M166.579 165.599C173.96 164.835 179.559 158.472 179.304 150.837C179.05 143.202 172.687 137.094 165.052 137.094H164.543C156.653 137.348 150.545 143.965 150.799 151.855C151.054 155.673 152.581 158.981 154.871 161.272C146.218 178.324 132.984 190.795 113.132 201.23C99.6432 208.356 85.6452 210.901 71.6472 209.12C60.1944 207.593 51.2866 202.502 45.6874 194.104C37.5431 181.633 36.7796 168.144 43.6513 154.655C48.487 144.983 56.1222 137.857 60.9579 134.294C59.9399 130.986 58.4128 125.386 57.6493 121.314C20.7456 148.038 24.5632 184.178 35.7615 201.23C44.1603 213.955 61.2124 221.845 80.046 221.845C85.1362 221.845 90.2264 221.336 95.3165 220.063C127.894 213.701 152.581 194.358 166.579 165.599V165.599Z"
        fill="white"
      />
      <path
        d="M211.372 134.04C192.03 111.388 163.525 98.9175 130.948 98.9175H126.876C124.585 94.3363 119.749 91.2822 114.405 91.2822H113.896C106.006 91.5367 99.8977 98.154 100.152 106.044C100.407 113.679 106.769 119.787 114.405 119.787H114.914C120.513 119.533 125.349 115.97 127.385 111.134H131.966C151.308 111.134 169.633 116.733 186.176 127.677C198.901 136.076 208.064 147.02 213.154 160.254C217.481 170.943 217.226 181.378 212.645 190.286C205.519 203.775 193.557 211.156 177.777 211.156C167.597 211.156 157.926 208.102 152.835 205.811C150.036 208.356 144.946 212.428 141.383 214.973C152.326 220.063 163.525 222.863 174.214 222.863C198.647 222.863 216.717 209.374 223.589 195.885C230.97 181.124 230.461 155.673 211.372 134.04Z"
        fill="white"
      />
      <path
        d="M82.0822 169.926C82.3367 177.561 88.6994 183.669 96.3347 183.669H96.8437C104.733 183.414 110.842 176.797 110.587 168.907C110.333 161.272 103.97 155.164 96.3347 155.164H95.8256C95.3166 155.164 94.5531 155.164 94.0441 155.419C83.6092 138.112 79.2826 119.278 80.8096 98.9177C81.8277 83.6472 86.9178 70.4127 95.8256 59.4689C103.206 50.0521 117.459 45.4709 127.13 45.2164C154.108 44.7074 165.561 78.3025 166.324 91.7915C169.633 92.555 175.232 94.3365 179.05 95.6091C175.996 54.3787 150.545 33 126.112 33C103.206 33 82.0822 49.543 73.6834 73.9759C61.976 106.553 69.6113 137.857 83.8637 162.545C82.5912 164.326 81.8277 167.126 82.0822 169.926V169.926Z"
        fill="white"
      />
    </svg>
  ),
  nodejs: (className: { className?: ComponentProps<"svg">["className"] }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        fill="#81CD39"
        d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"
      />
      <path
        fill="#81CD39"
        d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"
      />
    </svg>
  ),
  expressjs: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        className="fill-icon"
        d="M228 182.937C225.089 184.04 221.875 184.037 218.965 182.931C216.056 181.824 213.652 179.69 212.209 176.932C203.146 163.365 193.138 150.41 183.519 137.177L179.348 131.617C167.894 146.963 156.44 161.697 145.987 176.988C144.625 179.624 142.352 181.675 139.59 182.759C136.828 183.844 133.766 183.887 130.975 182.882L173.955 125.223L133.977 73.1236C136.855 72.0845 140.003 72.0702 142.89 73.0832C145.777 74.0962 148.226 76.0744 149.824 78.6838C159.109 92.2506 169.396 105.206 179.626 118.94C189.913 105.317 200.088 92.3062 209.596 78.8506C210.965 76.2574 213.24 74.258 215.988 73.2328C218.735 72.2076 221.764 72.2281 224.497 73.2904L208.984 93.8631C202.034 103.037 195.195 112.267 187.967 121.219C187.384 121.741 186.918 122.379 186.599 123.093C186.28 123.807 186.115 124.58 186.115 125.362C186.115 126.143 186.28 126.916 186.599 127.63C186.918 128.344 187.384 128.982 187.967 129.504C201.256 147.13 214.433 164.811 228 182.937V182.937Z"
      />
      <path
        className="fill-icon"
        d="M28 124.5C29.1676 118.94 29.8905 112.879 31.5029 107.208C41.122 73.0129 80.3214 58.7788 107.288 79.9632C123.079 92.3624 127.027 109.933 126.249 129.727H37.2855C35.8399 165.09 61.3611 186.441 93.9994 175.543C99.2938 173.649 104.033 170.467 107.79 166.283C111.547 162.099 114.202 157.045 115.517 151.578C117.241 146.018 120.021 145.073 125.303 146.685C124.433 153.454 122.04 159.938 118.303 165.649C114.567 171.36 109.584 176.149 103.73 179.657C94.0573 184.947 82.96 187.042 72.0247 185.644C61.0894 184.246 50.8763 179.426 42.8457 171.873C34.9011 162.94 30.0973 151.654 29.1676 139.735C29.1676 137.845 28.4448 135.954 28.0556 134.175C28.0185 130.876 28 127.651 28 124.5ZM37.3967 122.109H117.853C117.352 96.4769 101.172 78.2951 79.5986 78.1283C55.5785 77.7947 38.3976 95.5873 37.3411 121.998L37.3967 122.109Z"
      />
    </svg>
  ),
  prisma: (className: { className?: ComponentProps<"svg">["className"] }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" fill="#677EEB" rx="60" />
      <path
        fill="#F7FAFC"
        fill-rule="evenodd"
        d="M52.6582 165.183C50.7411 162.159 50.7122 158.307 52.5835 155.254L123.044 40.3196C126.963 33.927 136.426 34.4859 139.565 41.2954L203.934 180.926C206.322 186.107 203.573 192.203 198.108 193.843L97.9779 223.882C93.9492 225.09 89.6084 223.471 87.3564 219.918L52.6582 165.183ZM131.173 73.9256C131.852 70.5445 136.485 70.0569 137.853 73.2226L182.254 175.963C183.09 177.898 182.05 180.129 180.03 180.731L110.848 201.383C108.305 202.142 105.869 199.92 106.392 197.318L131.173 73.9256Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  postgresql: (className: {
    className?: ComponentProps<"svg">["className"];
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="none"
      viewBox="0 0 256 256"
      {...className}
    >
      <rect width="256" height="256" className="fill-iconBg" rx="60" />
      <path
        fill="#336791"
        d="M203.48 148.688C183.16 152.878 181.684 145.995 181.684 145.995C203.15 114.143 212.129 73.7134 204.38 63.8204C183.259 36.8204 146.689 49.5962 146.077 49.9266L145.88 49.9618C141.414 49.0656 136.873 48.5924 132.317 48.5485C123.12 48.4079 116.145 50.9602 110.844 54.9751C110.844 54.9751 45.6078 28.1016 48.6453 88.7743C49.2922 101.684 67.1375 186.509 88.4422 160.845C96.2891 151.409 103.812 143.484 103.812 143.484C107.539 145.966 112.018 147.232 116.708 146.775L117.073 146.466C116.966 147.681 117.016 148.905 117.221 150.108C111.737 156.239 113.354 157.315 102.385 159.572C91.2898 161.857 97.8148 165.928 102.062 166.997C107.223 168.291 119.162 170.119 127.234 158.827L126.91 160.113C129.062 161.836 130.566 171.314 130.313 179.906C130.06 188.499 129.891 194.391 131.579 199.003C133.266 203.616 134.954 213.98 149.368 210.956C161.413 208.376 167.649 201.675 168.528 190.524C169.147 182.592 170.539 183.759 170.638 176.672L171.763 173.311C173.049 162.553 171.973 159.087 179.391 160.704L181.198 160.866C186.662 161.112 193.813 159.987 198.003 158.039C207.038 153.849 212.396 146.845 203.487 148.688H203.48Z"
      />
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="5.034"
        d="M146.07 48.5961C143.82 49.2993 182.38 34.4985 204.303 62.504C212.038 72.3969 203.073 112.827 181.606 144.678M128.098 153.784C127.536 173.795 128.239 193.946 130.194 198.784C132.148 203.621 136.346 213.198 150.767 210.118C162.812 207.538 167.199 202.538 169.098 191.506L173.548 156.231L128.098 153.784ZM110.816 53.4688C110.816 53.4688 45.5375 26.7782 48.575 87.4508C49.2219 100.36 67.0672 185.185 88.3719 159.521C96.1484 150.148 103.18 142.815 103.18 142.815L110.816 53.4688Z"
      />
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="5.034"
        d="M181.613 144.664C181.613 144.664 183.02 151.555 203.41 147.35C212.319 145.508 206.954 152.511 197.926 156.702C190.515 160.147 173.893 161.026 173.619 156.28C172.916 144.01 182.366 147.737 181.684 144.664C181.065 141.894 176.832 139.18 174.048 132.402C171.608 126.495 140.579 81.1438 182.654 87.8727C184.201 87.5563 171.685 47.7946 132.31 47.2181C92.9352 46.6415 94.1797 95.6282 94.1797 95.6282"
      />
      <path
        stroke="#fff"
        stroke-linejoin="round"
        stroke-width="5.034"
        d="M117.08 148.869C111.596 155 113.213 156.076 102.245 158.333C91.1492 160.618 97.6742 164.689 101.921 165.758C107.082 167.052 119.021 168.88 127.093 157.58C129.554 154.135 127.079 148.651 123.704 147.259C122.073 146.584 119.893 145.74 117.095 148.876L117.08 148.869Z"
      />
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="5.034"
        d="M116.722 148.763C116.159 145.156 117.903 140.874 119.766 135.854C122.565 128.331 129.02 120.807 123.859 96.9219C120.013 79.1329 94.1867 93.2165 94.1867 95.6282C94.1867 98.0399 95.3539 107.863 93.7648 119.288C91.6766 134.209 103.257 146.823 116.588 145.536"
      />
      <path
        fill="#fff"
        stroke="#fff"
        stroke-width="1.68"
        d="M110.577 95.2695C110.457 96.0922 112.088 98.293 114.205 98.5883C116.321 98.8836 118.128 97.168 118.248 96.3383C118.367 95.5086 116.736 94.6086 114.62 94.3133C112.503 94.018 110.682 94.4539 110.577 95.2695V95.2695Z"
      />
      <path
        fill="#fff"
        stroke="#fff"
        stroke-width=".837"
        d="M175.011 93.5891C175.123 94.4118 173.499 96.6125 171.383 96.9079C169.266 97.2032 167.445 95.4875 167.34 94.6579C167.234 93.8282 168.852 92.9282 170.968 92.6329C173.084 92.3375 174.905 92.7735 175.011 93.5891Z"
      />
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="5.034"
        d="M182.577 87.8867C182.928 94.3555 181.184 98.75 180.959 105.634C180.636 115.632 185.727 127.079 178.055 138.54"
      />
    </svg>
  ),
};
