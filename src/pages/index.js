import * as React from "react";

import { useQueryParam, StringParam } from "use-query-params";
import Helmet from "react-helmet";
import { formatBalance, formatCurrency } from "../utils/formatter";
import { Header, MainTabs } from "../components";

// markup
const IndexPage = () => {
  const isSSR = typeof window === "undefined";
  const [mode] = useQueryParam("mode", StringParam);
  const [userId] = useQueryParam("userId", StringParam);
  const [payload, setPayload] = React.useState(null);
  const [usdRate, setUsdRate] = React.useState(null);

  React.useEffect(() => {
    async function fetchPayload() {
      const api = `https://dimensiondev.github.io/Maskbook-Configuration/com.maskbook.dao-${userId.toLowerCase()}.json`;
      try {
        const res = await fetch(api);
        if (!res.ok) {
          setPayload(null);
        }
        const r = await res.json();
        setPayload(r);
      } catch {
        setPayload(null);
      }
    }

    fetchPayload();
  }, [userId]);

  React.useEffect(() => {
    async function fetchRate() {
      const api = `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD`;
      try {
        const res = await fetch(api);
        if (!res.ok) {
          setUsdRate(null);
        }
        const r = await res.json();
        setUsdRate(r.USD);
      } catch {
        setUsdRate(null);
      }
    }

    fetchRate();
  }, []);

  if (isSSR || !userId || !payload) return null;
  console.log({ payload });
  return (
    <>
      <Helmet>
        <script src="https://dimensiondev.github.io/DAO-Interface/iframeResizer.contentWindow.min.js" />
      </Helmet>
      <main className="mx-8 py-2">
        <Header mode={mode} payload={payload} usdRate={usdRate} />
        <MainTabs mode={mode} payload={payload} usdRate={usdRate} />
      </main>
    </>
  );
};

export default IndexPage;
