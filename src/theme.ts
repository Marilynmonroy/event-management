// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you

import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	// properties: {
	// 	// =~= Theme Properties =~=
	// 	'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
	// 	'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
	// 	'--theme-font-color-base': '0 0 0',
	// 	'--theme-font-color-dark': '255 255 255',
	// 	'--theme-rounded-base': '24px',
	// 	'--theme-rounded-container': '12px',
	// 	'--theme-border-base': '2px',
	// 	// =~= Theme On-X Colors =~=
	// 	'--on-primary': 'var(--color-tertiary-500)',
	// 	'--on-secondary': '0 0 0',
	// 	'--on-tertiary': '0 0 0',
	// 	'--on-success': '0 0 0',
	// 	'--on-warning': '0 0 0',
	// 	'--on-error': '255 255 255',
	// 	'--on-surface': '0 0 0',
	// 	// =~= Theme Colors  =~=
	// 	// primary | #663cb9
	// 	'--color-primary-50': '232 226 245', // #e8e2f5
	// 	'--color-primary-100': '224 216 241', // #e0d8f1
	// 	'--color-primary-200': '217 206 238', // #d9ceee
	// 	'--color-primary-300': '194 177 227', // #c2b1e3
	// 	'--color-primary-400': '148 119 206', // #9477ce
	// 	'--color-primary-500': '102 60 185', // #663cb9
	// 	'--color-primary-600': '92 54 167', // #5c36a7
	// 	'--color-primary-700': '77 45 139', // #4d2d8b
	// 	'--color-primary-800': '61 36 111', // #3d246f
	// 	'--color-primary-900': '50 29 91', // #321d5b
	// 	// secondary | #1fd99b
	// 	'--color-secondary-50': '221 249 240', // #ddf9f0
	// 	'--color-secondary-100': '210 247 235', // #d2f7eb
	// 	'--color-secondary-200': '199 246 230', // #c7f6e6
	// 	'--color-secondary-300': '165 240 215', // #a5f0d7
	// 	'--color-secondary-400': '98 228 185', // #62e4b9
	// 	'--color-secondary-500': '31 217 155', // #1fd99b
	// 	'--color-secondary-600': '28 195 140', // #1cc38c
	// 	'--color-secondary-700': '23 163 116', // #17a374
	// 	'--color-secondary-800': '19 130 93', // #13825d
	// 	'--color-secondary-900': '15 106 76', // #0f6a4c
	// 	// tertiary | #f1f7f6
	// 	'--color-tertiary-50': '253 254 254', // #fdfefe
	// 	'--color-tertiary-100': '252 253 253', // #fcfdfd
	// 	'--color-tertiary-200': '252 253 253', // #fcfdfd
	// 	'--color-tertiary-300': '249 252 251', // #f9fcfb
	// 	'--color-tertiary-400': '245 249 249', // #f5f9f9
	// 	'--color-tertiary-500': '241 247 246', // #f1f7f6
	// 	'--color-tertiary-600': '217 222 221', // #d9dedd
	// 	'--color-tertiary-700': '181 185 185', // #b5b9b9
	// 	'--color-tertiary-800': '145 148 148', // #919494
	// 	'--color-tertiary-900': '118 121 121', // #767979
	// 	// success | #84cc16
	// 	'--color-success-50': '237 247 220', // #edf7dc
	// 	'--color-success-100': '230 245 208', // #e6f5d0
	// 	'--color-success-200': '224 242 197', // #e0f2c5
	// 	'--color-success-300': '206 235 162', // #ceeba2
	// 	'--color-success-400': '169 219 92', // #a9db5c
	// 	'--color-success-500': '132 204 22', // #84cc16
	// 	'--color-success-600': '119 184 20', // #77b814
	// 	'--color-success-700': '99 153 17', // #639911
	// 	'--color-success-800': '79 122 13', // #4f7a0d
	// 	'--color-success-900': '65 100 11', // #41640b
	// 	// warning | #EAB308
	// 	'--color-warning-50': '252 244 218', // #fcf4da
	// 	'--color-warning-100': '251 240 206', // #fbf0ce
	// 	'--color-warning-200': '250 236 193', // #faecc1
	// 	'--color-warning-300': '247 225 156', // #f7e19c
	// 	'--color-warning-400': '240 202 82', // #f0ca52
	// 	'--color-warning-500': '234 179 8', // #EAB308
	// 	'--color-warning-600': '211 161 7', // #d3a107
	// 	'--color-warning-700': '176 134 6', // #b08606
	// 	'--color-warning-800': '140 107 5', // #8c6b05
	// 	'--color-warning-900': '115 88 4', // #735804
	// 	// error | #c11f48
	// 	'--color-error-50': '246 221 228', // #f6dde4
	// 	'--color-error-100': '243 210 218', // #f3d2da
	// 	'--color-error-200': '240 199 209', // #f0c7d1
	// 	'--color-error-300': '230 165 182', // #e6a5b6
	// 	'--color-error-400': '212 98 127', // #d4627f
	// 	'--color-error-500': '193 31 72', // #c11f48
	// 	'--color-error-600': '174 28 65', // #ae1c41
	// 	'--color-error-700': '145 23 54', // #911736
	// 	'--color-error-800': '116 19 43', // #74132b
	// 	'--color-error-900': '95 15 35', // #5f0f23
	// 	// surface | #140d21
	// 	'--color-surface-50': '220 219 222', // #dcdbde
	// 	'--color-surface-100': '208 207 211', // #d0cfd3
	// 	'--color-surface-200': '196 195 200', // #c4c3c8
	// 	'--color-surface-300': '161 158 166', // #a19ea6
	// 	'--color-surface-400': '91 86 100', // #5b5664
	// 	'--color-surface-500': '20 13 33', // #140d21
	// 	'--color-surface-600': '18 12 30', // #120c1e
	// 	'--color-surface-700': '15 10 25', // #0f0a19
	// 	'--color-surface-800': '12 8 20', // #0c0814
	// 	'--color-surface-900': '10 6 16' // #0a0610
	// }
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #9477ce
		'--color-primary-50': '239 235 248', // #efebf8
		'--color-primary-100': '234 228 245', // #eae4f5
		'--color-primary-200': '228 221 243', // #e4ddf3
		'--color-primary-300': '212 201 235', // #d4c9eb
		'--color-primary-400': '180 160 221', // #b4a0dd
		'--color-primary-500': '148 119 206', // #9477ce
		'--color-primary-600': '133 107 185', // #856bb9
		'--color-primary-700': '111 89 155', // #6f599b
		'--color-primary-800': '89 71 124', // #59477c
		'--color-primary-900': '73 58 101', // #493a65
		// secondary | #1fd99b
		'--color-secondary-50': '221 249 240', // #ddf9f0
		'--color-secondary-100': '210 247 235', // #d2f7eb
		'--color-secondary-200': '199 246 230', // #c7f6e6
		'--color-secondary-300': '165 240 215', // #a5f0d7
		'--color-secondary-400': '98 228 185', // #62e4b9
		'--color-secondary-500': '31 217 155', // #1fd99b
		'--color-secondary-600': '28 195 140', // #1cc38c
		'--color-secondary-700': '23 163 116', // #17a374
		'--color-secondary-800': '19 130 93', // #13825d
		'--color-secondary-900': '15 106 76', // #0f6a4c
		// tertiary | #f1f7f6
		'--color-tertiary-50': '253 254 254', // #fdfefe
		'--color-tertiary-100': '252 253 253', // #fcfdfd
		'--color-tertiary-200': '252 253 253', // #fcfdfd
		'--color-tertiary-300': '249 252 251', // #f9fcfb
		'--color-tertiary-400': '245 249 249', // #f5f9f9
		'--color-tertiary-500': '241 247 246', // #f1f7f6
		'--color-tertiary-600': '217 222 221', // #d9dedd
		'--color-tertiary-700': '181 185 185', // #b5b9b9
		'--color-tertiary-800': '145 148 148', // #919494
		'--color-tertiary-900': '118 121 121', // #767979
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #c11f48
		'--color-error-50': '246 221 228', // #f6dde4
		'--color-error-100': '243 210 218', // #f3d2da
		'--color-error-200': '240 199 209', // #f0c7d1
		'--color-error-300': '230 165 182', // #e6a5b6
		'--color-error-400': '212 98 127', // #d4627f
		'--color-error-500': '193 31 72', // #c11f48
		'--color-error-600': '174 28 65', // #ae1c41
		'--color-error-700': '145 23 54', // #911736
		'--color-error-800': '116 19 43', // #74132b
		'--color-error-900': '95 15 35', // #5f0f23
		// surface | #352358
		'--color-surface-50': '225 222 230', // #e1dee6
		'--color-surface-100': '215 211 222', // #d7d3de
		'--color-surface-200': '205 200 213', // #cdc8d5
		'--color-surface-300': '174 167 188', // #aea7bc
		'--color-surface-400': '114 101 138', // #72658a
		'--color-surface-500': '53 35 88', // #352358
		'--color-surface-600': '48 32 79', // #30204f
		'--color-surface-700': '40 26 66', // #281a42
		'--color-surface-800': '32 21 53', // #201535
		'--color-surface-900': '26 17 43' // #1a112b
	}
};
