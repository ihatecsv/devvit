import { Devvit, svg } from '@devvit/public-api';

export const SettingsCroppedIcon: Devvit.BlockComponent<{ onPress: () => void }> = (props) => {
  return (
    <image
      width="20px"
      height="32px"
      imageWidth="20px"
      imageHeight="32px"
      onPress={props.onPress}
      url={svg`<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="black" fill-opacity="0.8"/>
<g clip-path="url(#clip0_1449_12442)">
<path d="M16 24C15.679 23.9995 15.3583 23.9784 15.04 23.9368C14.8199 23.9072 14.6182 23.7986 14.4722 23.6313C14.3262 23.4639 14.246 23.2493 14.2464 23.0272V22.1688C14.2417 22.0153 14.1916 21.8665 14.1023 21.7415C14.013 21.6164 13.8886 21.5207 13.7448 21.4664C13.6037 21.4002 13.4461 21.3776 13.292 21.4014C13.138 21.4252 12.9945 21.4943 12.88 21.6L12.276 22.2024C12.118 22.3622 11.907 22.4585 11.6828 22.4733C11.4586 22.488 11.2368 22.4201 11.0592 22.2824C10.5631 21.8904 10.1145 21.4417 9.7224 20.9456C9.58428 20.768 9.51613 20.5458 9.53087 20.3212C9.54562 20.0967 9.64223 19.8853 9.8024 19.7272L10.4 19.1248C10.5059 19.0125 10.5758 18.8711 10.6009 18.7187C10.626 18.5664 10.6051 18.41 10.5408 18.2696C10.488 18.1221 10.3921 17.9938 10.2656 17.9012C10.1392 17.8087 9.98783 17.7561 9.8312 17.7504H8.9728C8.75123 17.751 8.53698 17.6712 8.36973 17.5259C8.20248 17.3806 8.09358 17.1795 8.0632 16.96C7.97893 16.3247 7.97893 15.681 8.0632 15.0456C8.09287 14.8256 8.20147 14.6238 8.36879 14.4778C8.53611 14.3318 8.75075 14.2516 8.9728 14.252H9.8312C9.98479 14.2474 10.1335 14.1972 10.2586 14.1079C10.3836 14.0186 10.4793 13.8942 10.5336 13.7504C10.6012 13.6087 10.6245 13.4499 10.6007 13.2947C10.5769 13.1395 10.507 12.995 10.4 12.88L9.7968 12.2768C9.637 12.1187 9.54063 11.9076 9.52589 11.6832C9.51116 11.4589 9.57907 11.2369 9.7168 11.0592C10.1091 10.5617 10.5583 10.1117 11.0552 9.71845C11.2332 9.58154 11.455 9.51415 11.6791 9.52887C11.9032 9.5436 12.1142 9.63943 12.2728 9.79845L12.88 10.4C12.9921 10.5061 13.1334 10.5763 13.2856 10.6014C13.4379 10.6265 13.5942 10.6054 13.7344 10.5408C13.882 10.488 14.0103 10.3922 14.1028 10.2657C14.1954 10.1392 14.2479 9.98788 14.2536 9.83125V8.97285C14.2529 8.75188 14.3321 8.53811 14.4767 8.37096C14.6212 8.2038 14.8213 8.09451 15.04 8.06325C15.6754 7.97925 16.319 7.97925 16.9544 8.06325C17.1744 8.09294 17.3761 8.20156 17.5219 8.3689C17.6678 8.53623 17.7478 8.75087 17.7472 8.97285V9.83125C17.752 9.9849 17.8024 10.1337 17.8918 10.2587C17.9812 10.3837 18.1058 10.4794 18.2496 10.5336C18.3918 10.6023 18.5514 10.6263 18.7075 10.6024C18.8636 10.5786 19.0088 10.508 19.124 10.4L19.7272 9.79685C19.8855 9.63736 20.0966 9.54121 20.3209 9.52648C20.5451 9.51174 20.767 9.57945 20.9448 9.71685C21.4409 10.1089 21.8895 10.5576 22.2816 11.0536C22.4193 11.2313 22.4873 11.4533 22.4725 11.6776C22.4578 11.902 22.3614 12.1131 22.2016 12.2712L21.6 12.88C21.4941 12.9922 21.4241 13.1335 21.399 13.2857C21.3739 13.438 21.3949 13.5942 21.4592 13.7344C21.512 13.882 21.6079 14.0103 21.7344 14.1029C21.8609 14.1954 22.0122 14.2479 22.1688 14.2536H23.0272C23.2491 14.2532 23.4637 14.3333 23.631 14.4791C23.7983 14.6249 23.907 14.8265 23.9368 15.0464C24.0211 15.6815 24.0211 16.325 23.9368 16.96C23.9071 17.1801 23.7985 17.3819 23.6312 17.5279C23.4639 17.6739 23.2493 17.7541 23.0272 17.7536H22.1688C22.0157 17.7656 21.869 17.8197 21.7447 17.9099C21.6205 18.0001 21.5236 18.1228 21.4647 18.2646C21.4058 18.4064 21.3873 18.5618 21.4112 18.7134C21.4351 18.8651 21.5004 19.0072 21.6 19.124L22.2024 19.728C22.3621 19.886 22.4585 20.0971 22.4732 20.3213C22.488 20.5455 22.4201 20.7673 22.2824 20.9448C21.8903 21.4409 21.4417 21.8896 20.9456 22.2816C20.768 22.4196 20.546 22.4876 20.3216 22.4728C20.0972 22.4581 19.886 22.3616 19.728 22.2016L19.1248 21.6C19.0124 21.4942 18.871 21.4242 18.7187 21.3991C18.5663 21.374 18.41 21.395 18.2696 21.4592C18.122 21.512 17.9935 21.6079 17.9008 21.7343C17.8081 21.8608 17.7555 22.0122 17.7496 22.1688V23.0272C17.7503 23.2491 17.6703 23.4636 17.5246 23.631C17.3789 23.7983 17.1774 23.907 16.9576 23.9368C16.6401 23.9782 16.3202 23.9994 16 24ZM15.2496 22.9544C15.7477 23.0161 16.2515 23.0161 16.7496 22.9544V22.1688C16.7611 21.817 16.8737 21.4759 17.0739 21.1864C17.2741 20.8968 17.5534 20.6711 17.8785 20.536C18.2036 20.401 18.5607 20.3625 18.9072 20.4251C19.2536 20.4876 19.5747 20.6487 19.832 20.8888L20.3864 21.444C20.7768 21.1292 21.1324 20.7736 21.4472 20.3832L20.892 19.828C20.6516 19.5709 20.4904 19.2499 20.4278 18.9035C20.3651 18.5571 20.4036 18.2 20.5387 17.8749C20.6737 17.5499 20.8996 17.2706 21.1893 17.0706C21.479 16.8706 21.8202 16.7583 22.172 16.7472H22.9576C23.0184 16.2488 23.0184 15.7449 22.9576 15.2464H22.172C21.8202 15.2426 21.4775 15.134 21.1877 14.9345C20.8979 14.735 20.674 14.4537 20.5448 14.1264C20.4008 13.802 20.3573 13.4418 20.4197 13.0924C20.4822 12.7429 20.6478 12.4202 20.8952 12.1656L21.4504 11.6112C21.1355 11.2207 20.7796 10.865 20.3888 10.5504L19.8352 11.1056C19.5827 11.3516 19.2626 11.5168 18.9158 11.5802C18.569 11.6436 18.2112 11.6024 17.888 11.4616C17.5575 11.3337 17.2729 11.1099 17.0706 10.8189C16.8683 10.528 16.7576 10.1832 16.7528 9.82885V9.04565C16.2547 8.98405 15.7509 8.98405 15.2528 9.04565V9.83125C15.2489 10.1831 15.1403 10.5258 14.9408 10.8156C14.7414 11.1054 14.46 11.3292 14.1328 11.4584C13.8077 11.6025 13.4469 11.6461 13.0968 11.5837C12.7467 11.5213 12.4233 11.3556 12.168 11.108L11.6136 10.5528C11.223 10.8677 10.8674 11.2236 10.5528 11.6144L11.108 12.168C11.3543 12.4204 11.5197 12.7405 11.5831 13.0873C11.6465 13.4342 11.605 13.7921 11.464 14.1152C11.336 14.4456 11.1122 14.7302 10.8212 14.9323C10.5302 15.1345 10.1855 15.245 9.8312 15.2496H9.0456C8.9848 15.7481 8.9848 16.252 9.0456 16.7504H9.8312C10.183 16.7543 10.5257 16.8629 10.8155 17.0624C11.1054 17.2619 11.3292 17.5432 11.4584 17.8705C11.6024 18.1949 11.6459 18.5551 11.5835 18.9045C11.521 19.254 11.3554 19.5767 11.108 19.8312L10.5528 20.3856C10.8676 20.776 11.2232 21.1316 11.6136 21.4464L12.1688 20.8912C12.4213 20.6454 12.7412 20.4803 13.0878 20.4169C13.4344 20.3535 13.7921 20.3947 14.1152 20.5352C14.4456 20.6632 14.7301 20.8871 14.9323 21.178C15.1344 21.469 15.245 21.8138 15.2496 22.168V22.9544ZM16 18.5832C15.4891 18.5832 14.9897 18.4317 14.5649 18.1479C14.14 17.8641 13.809 17.4606 13.6134 16.9886C13.4179 16.5166 13.3668 15.9972 13.4664 15.4961C13.5661 14.995 13.8121 14.5347 14.1734 14.1735C14.5347 13.8122 14.995 13.5662 15.496 13.4665C15.9971 13.3668 16.5165 13.418 16.9886 13.6135C17.4606 13.809 17.864 14.1401 18.1479 14.5649C18.4317 14.9897 18.5832 15.4891 18.5832 16C18.5824 16.6849 18.3099 17.3415 17.8257 17.8257C17.3414 18.31 16.6848 18.5824 16 18.5832ZM16 14.4168C15.6869 14.4168 15.3808 14.5097 15.1204 14.6837C14.8601 14.8576 14.6571 15.1049 14.5373 15.3942C14.4175 15.6835 14.3861 16.0018 14.4472 16.3089C14.5083 16.616 14.6591 16.8981 14.8805 17.1195C15.1019 17.341 15.384 17.4917 15.6911 17.5528C15.9982 17.6139 16.3166 17.5826 16.6059 17.4627C16.8952 17.3429 17.1424 17.14 17.3164 16.8796C17.4903 16.6193 17.5832 16.3132 17.5832 16C17.583 15.5802 17.4161 15.1777 17.1193 14.8808C16.8224 14.5839 16.4198 14.4171 16 14.4168Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1449_12442">
<rect width="16" height="16" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>`}
    />
  );
};