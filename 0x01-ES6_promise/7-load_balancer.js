/* eslint-disable */

export default function loadBalancer(chinaDownlod, USDownload) {
	return Promise.race([chinaDownlod, USDownload]);
}
