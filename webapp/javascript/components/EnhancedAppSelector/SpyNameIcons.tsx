import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';

import type { SpyNameFirstClassType } from '@pyroscope/models/src/spyName';

const GoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#ffcc80"
        d="M35.547 42.431l-3.182-3.182-2.121 2.121 3.182 3.182c.586.586 1.536.586 2.121 0S36.133 43.017 35.547 42.431zM38.547 24.431l-3.182-3.182-2.121 2.121 3.182 3.182c.586.586 1.536.586 2.121 0S39.133 25.017 38.547 24.431zM12.683 42.431l3.182-3.182 2.121 2.121-3.182 3.182c-.586.586-1.536.586-2.121 0S12.097 43.017 12.683 42.431zM9.433 24.431l3.182-3.182 2.121 2.121-3.182 3.182c-.586.586-1.536.586-2.121 0S8.847 25.017 9.433 24.431z"
      />
      <path
        fill="#4dd0e1"
        d="M38 8c0-1.933-1.149-3-3.231-3S31 7.567 31 9.5c0 1 1.923 1.5 3 1.5C36.082 11 38 9.933 38 8zM10 8c0-1.933 1.149-3 3.231-3S17 7.567 17 9.5c0 1-1.923 1.5-3 1.5C11.918 11 10 9.933 10 8z"
      />
      <path
        fill="#424242"
        d="M35 7A1 1 0 1 0 35 9 1 1 0 1 0 35 7zM13 7A1 1 0 1 0 13 9 1 1 0 1 0 13 7z"
      />
      <path
        fill="#4dd0e1"
        d="M37,34c0,4.774-3.219,10-13.31,10C15.568,44,11,38.774,11,34c0-5,1-5.806,1-10c0-4.688,0-7,0-10 c0-4.774,3.076-11,11.69-11S36,6.991,36,13c0,3-0.237,5.453,0,10C36.186,26.562,37,31,37,34z"
      />
      <g>
        <path
          fill="#f5f5f5"
          d="M29 6A4 4 0 1 0 29 14 4 4 0 1 0 29 6zM19 6A4 4 0 1 0 19 14 4 4 0 1 0 19 6z"
        />
      </g>
      <g>
        <path
          fill="#eee"
          d="M24 20c0 .552.448 1 1 1s1-.448 1-1v-3h-2V20zM22 20c0 .552.448 1 1 1s1-.448 1-1v-3h-2V20z"
        />
      </g>
      <path
        fill="#ffcc80"
        d="M26.5,18c-0.412,0-0.653-0.085-1.011-0.205c-0.975-0.328-2.021-0.326-2.996,0.002 C22.138,17.916,21.91,18,21.5,18c-1.334,0-1.5-1-1.5-1.5c0-1.5,1.5-2.5,3-2.5c0.835,0,1.165,0,2,0c1.5,0,3,1,3,2.5 C28,17,27.834,18,26.5,18z"
      />
      <g>
        <path
          fill="#424242"
          d="M27 9A1 1 0 1 0 27 11 1 1 0 1 0 27 9zM17 9A1 1 0 1 0 17 11 1 1 0 1 0 17 9zM24 13A2 1 0 1 0 24 15 2 1 0 1 0 24 13z"
        />
      </g>
    </svg>
  );
};

const JavaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#F44336"
        d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
      />
      <path
        fill="#F44336"
        d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
      />
      <g>
        <path
          fill="#1565C0"
          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
        />
        <path
          fill="#1565C0"
          d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
        />
        <path
          fill="#1565C0"
          d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
        />
        <path
          fill="#1565C0"
          d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
        />
        <path
          fill="#1565C0"
          d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
        />
      </g>
    </svg>
  );
};

const RubyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path fill="#9B1010" d="M42 14L40 40 14 42z" />
      <path fill="#B71C1C" d="M28 28L40 40 42 14z" />
      <path
        fill="#C62828"
        d="M24 12.336A22.621 11.664 0 1 0 24 35.664A22.621 11.664 0 1 0 24 12.336Z"
        transform="rotate(-45.001 24 24)"
      />
      <path
        fill="#E53935"
        d="M10 17L17 10 25 6 31 10 28 19 19 27 10 30 6 24z"
      />
      <path
        fill="#FF5252"
        d="M31,10l-6-4h11L31,10z M42,15l-11-5l-3,9L42,15z M19,27l13.235,5.235L28,19L19,27z M10,30l4,12l5-15L10,30z M6,24v11l4-5L6,24z"
      />
    </svg>
  );
};

const NodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#388e3c"
        d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
      />
      <path
        fill="#37474f"
        d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
      />
      <path
        fill="#2e7d32"
        d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
      />
      <path
        fill="#4caf50"
        d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
      />
      <path
        fill="#37474f"
        d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
      />
    </svg>
  );
};

const RustIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      baseProfile="basic"
    >
      <path
        fill="#37474f"
        d="M42.164,24L44,22.03l-2.185-1.574l1.416-2.29l-2.45-1.117l0.942-2.522l-2.621-0.618l0.432-2.658	l-2.691-0.095l-0.095-2.691l-2.658,0.432l-0.618-2.621l-2.522,0.942l-1.117-2.45l-2.29,1.416L25.97,4L24,5.836L22.03,4l-1.574,2.185	l-2.29-1.416l-1.117,2.45l-2.522-0.942l-0.618,2.621l-2.658-0.432l-0.095,2.691l-2.691,0.095l0.432,2.658l-2.621,0.618l0.942,2.522	l-2.45,1.117l1.416,2.29L4,22.03L5.836,24L4,25.97l2.185,1.574l-1.416,2.29l2.45,1.117l-0.942,2.522l2.621,0.618l-0.432,2.658	l2.691,0.095l0.095,2.691l2.658-0.432l0.618,2.621l2.522-0.942l1.117,2.45l2.29-1.416L22.03,44L24,42.164L25.97,44l1.574-2.185	l2.29,1.416l1.117-2.45l2.522,0.942l0.618-2.621l2.658,0.432l0.095-2.691l2.691-0.095l-0.432-2.658l2.621-0.618l-0.942-2.522	l2.45-1.117l-1.416-2.29L44,25.97L42.164,24z M24,7c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,7,24,7z M9,18	c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S8.448,18,9,18z M8.808,29C8.29,27.426,8,25.748,8,24	c0-0.704,0.061-1.392,0.149-2.072l2.707-1.45c0.55-0.294,0.824-0.895,0.738-1.478H13v10H8.808z M15,38c-0.552,0-1-0.448-1-1	s0.448-1,1-1s1,0.448,1,1S15.552,38,15,38z M33,38c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S33.552,38,33,38z M35.444,35.171	l-3.112-0.497c-0.784-0.125-1.521,0.409-1.646,1.193l-0.459,2.877C28.313,39.552,26.209,40,24,40c-2.256,0-4.4-0.472-6.346-1.314	l-0.43-2.692c-0.125-0.784-0.862-1.318-1.646-1.193l-2.932,0.468c-0.691-0.696-1.319-1.456-1.873-2.27h13.178v-4H20v-3h2.872	c5.474,0,0.987,7,8.247,7h6.108C36.697,33.777,36.098,34.501,35.444,35.171z M20.238,22v-3h5.198c0.82,0,1.485,0.665,1.485,1.485	v0.03c0,0.82-0.665,1.485-1.485,1.485H20.238z M39.927,25.436h-2.611v1.232c0,1.37-0.854,2.332-1.844,2.332	c-2.547,0-1.855-3.537-4.953-5.08c2.312-0.381,4.084-2.43,4.084-4.92c0-2.761-2.172-5-4.851-5h-5.802h-8.168h-4.262	c2.272-2.832,5.483-4.876,9.166-5.652l2.297,2.297c0.561,0.561,1.471,0.561,2.032,0l2.297-2.297c4.64,0.978,8.54,3.962,10.744,8.007	l-1.167,2.178c-0.375,0.7-0.111,1.571,0.588,1.945l2.342,1.254C39.927,22.475,40,23.228,40,24C40,24.485,39.97,24.962,39.927,25.436	z M39,20c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S39.552,20,39,20z"
      />
    </svg>
  );
};

const PythonIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUa"
        x1="10.458"
        x2="26.314"
        y1="12.972"
        y2="26.277"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#26abe7" />
        <stop offset="1" stopColor="#086dbf" />
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUa)"
        d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
      />
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUb"
        x1="35.334"
        x2="23.517"
        y1="37.911"
        y2="21.034"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#feb705" />
        <stop offset="1" stopColor="#ffda1c" />
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUb)"
        d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
      />
    </svg>
  );
};

const DotNetIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
    >
      <circle fill="#5c2d91" cx="32" cy="32" r="32" />
      <path
        fill="#fff"
        style={{ opacity: 0.1 }}
        d="M9.82,9A32,32,0,1,0,55,54.18Z"
      />
      <path
        fill="#fff"
        d="M7.4,37.25a1.35,1.35,0,0,1-1-.42,1.38,1.38,0,0,1-.41-1,1.4,1.4,0,0,1,.41-1,1.34,1.34,0,0,1,1-.43,1.37,1.37,0,0,1,1,.43,1.39,1.39,0,0,1,.42,1,1.37,1.37,0,0,1-.42,1A1.38,1.38,0,0,1,7.4,37.25Z"
      />
      <path
        fill="#fff"
        d="M27.27,37H24.65L15.28,22.46a6,6,0,0,1-.58-1.14h-.08a18.72,18.72,0,0,1,.1,2.5V37H12.59V18.77h2.77l9.12,14.28q.57.89.74,1.22h.05a19.28,19.28,0,0,1-.13-2.68V18.77h2.13Z"
      />
      <path
        fill="#fff"
        d="M41.69,37H32V18.77h9.24V20.7H34.18v6.06h6.58v1.92H34.18V35h7.52Z"
      />
      <path fill="#fff" d="M56,20.7H50.7V37H48.57V20.7H43.33V18.77H56Z" />
      <path
        fill="#f2f2f2"
        d="M26.12,49.4a4.93,4.93,0,0,1-2.32.49,3.74,3.74,0,0,1-2.87-1.15,4.26,4.26,0,0,1-1.08-3,4.46,4.46,0,0,1,1.21-3.26,4.12,4.12,0,0,1,3.08-1.24,4.93,4.93,0,0,1,2,.35v1a4,4,0,0,0-2-.5,3.06,3.06,0,0,0-2.35,1,3.64,3.64,0,0,0-.9,2.58,3.47,3.47,0,0,0,.84,2.45,2.86,2.86,0,0,0,2.21.91,4.14,4.14,0,0,0,2.19-.56Z"
      />
      <path
        fill="#f2f2f2"
        d="M30.21,49.89A2.78,2.78,0,0,1,28.08,49a3.11,3.11,0,0,1-.79-2.23,3.24,3.24,0,0,1,.83-2.36,3,3,0,0,1,2.23-.85,2.69,2.69,0,0,1,2.09.83,3.28,3.28,0,0,1,.75,2.29,3.22,3.22,0,0,1-.81,2.3A2.84,2.84,0,0,1,30.21,49.89Zm.07-5.47a1.83,1.83,0,0,0-1.46.63,2.59,2.59,0,0,0-.54,1.74,2.45,2.45,0,0,0,.54,1.68,1.85,1.85,0,0,0,1.46.62,1.76,1.76,0,0,0,1.43-.6,2.62,2.62,0,0,0,.5-1.72,2.66,2.66,0,0,0-.5-1.73A1.75,1.75,0,0,0,30.28,44.42Z"
      />
      <path
        fill="#f2f2f2"
        d="M37.86,44.72a1.18,1.18,0,0,0-.73-.19,1.23,1.23,0,0,0-1,.58,2.68,2.68,0,0,0-.41,1.58v3.06h-1v-6h1V45h0a2.1,2.1,0,0,1,.63-1,1.43,1.43,0,0,1,.94-.35,1.57,1.57,0,0,1,.57.08Z"
      />
      <path
        fill="#f2f2f2"
        d="M43.72,47H39.49A2.24,2.24,0,0,0,40,48.54a1.86,1.86,0,0,0,1.42.54,3,3,0,0,0,1.86-.67v.9a3.48,3.48,0,0,1-2.09.57,2.54,2.54,0,0,1-2-.82,3.35,3.35,0,0,1-.73-2.3,3.28,3.28,0,0,1,.79-2.28,2.55,2.55,0,0,1,2-.88,2.26,2.26,0,0,1,1.82.76,3.18,3.18,0,0,1,.64,2.12Zm-1-.81a2,2,0,0,0-.4-1.29,1.37,1.37,0,0,0-1.1-.46,1.55,1.55,0,0,0-1.15.49,2.21,2.21,0,0,0-.59,1.27Z"
      />
    </svg>
  );
};

const PhpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="40px"
      height="40px"
    >
      <path
        fill="#dcd5f2"
        d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"
      />
      <path
        fill="#8b75a1"
        d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"
      />
      <path
        fill="#36404d"
        d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"
      />
      <g>
        <path
          fill="#36404d"
          d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"
        />
      </g>
    </svg>
  );
};

const EbpfIcon = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="290px"
      height="296px"
      viewBox="0 0 290 296"
      enableBackground="new 0 0 290 296"
    >
      {' '}
      <image
        id="image0"
        width="290"
        height="296"
        x="0"
        y="0"
        href="data:image/png;base64,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"
      />
    </svg>
  );
};

export const SPY_NAMES_TOOLTIPS = {
  rbspy: 'Ruby',
  'pyroscope-rs': 'Rust',
  pyspy: 'Python',
  javaspy: 'Java',
  phpspy: 'Php',
  nodespy: 'Nodejs',
  gospy: 'Go',
  dotnetspy: '.Net',
  ebpfspy: 'eBPF',
  unknown: 'unknown',
};

export const SPY_NAMES_ICONS: {
  [k in SpyNameFirstClassType | 'unknown']: ReactNode;
} = {
  rbspy: <RubyIcon />,
  'pyroscope-rs': <RustIcon />,
  pyspy: <PythonIcon />,
  javaspy: <JavaIcon />,
  phpspy: <PhpIcon />,
  nodespy: <NodeIcon />,
  gospy: <GoIcon />,
  dotnetspy: <DotNetIcon />,
  ebpfspy: <EbpfIcon />,
  unknown: <FontAwesomeIcon icon={faQuestion} />,
};
