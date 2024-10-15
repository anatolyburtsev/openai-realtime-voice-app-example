import React from "react";
import "./GoogleAdMock.css";

export type GoogleAdActionProps = {
  type: "call" | "custom" | "nothing";
  value: string;
}

export type GoogleAdProps = {
  title: string;
  description: string;
  url: string;
  url_suffix: string;
  action: GoogleAdActionProps;
}

function GoogleAdMock({ title, description, url, url_suffix, action }: GoogleAdProps) {
  const renderAction = () => {
    switch (action.type) {
      case "call":
        return (
          <div className="ad-call">
            <img
              src="https://www.google.com/images/icons/material/system/2x/call_black_24dp.png"
              alt="Phone Icon"
              className="call-icon"
            />
            <span className="call-number">{action.value}</span>
          </div>
        );
      case "custom":
        return <div className="ad-call custom-action">{action.value}</div>;
      case "nothing":
      default:
        return null;
    }
  };

  return (
    <div className="mobile-phone">
      <div className="google-ad-page">
        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Google"
            className="search-input"
            value="google search bar"
            readOnly
          />
        </div>

        {/* Ad Block */}
        <div className="ad-block">
          <div className="ad-sponsor">Sponsored</div>
          <div className="ad-header">
            <img
              src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico"
              alt="Ad Icon"
              className="ad-icon"
            />
            <div>
              <span className="ad-url">{url}</span>
              <span className="ad-breadcrumb"> › {url_suffix}</span>
            </div>
          </div>
          <div className="ad-title">
            {title || "Title placeholder"}
          </div>
          <p className="ad-description">
            {description || "Description placeholder"}
          </p>

          {/* Action rendering based on the action prop */}
          {renderAction()}
        </div>

        {/* Search Results */}
        <div className="search-results">
          <div className="result-block">
            <a className="result-title">Google search result 1</a>
            <div className="result-url">https://www.example.com › google-ads-audit</div>
            <p className="result-description">
              A Google Ads audit is a thorough evaluation of your Google Ads account and its performance. Learn how to improve your ad ROI.
            </p>
          </div>
          <div className="result-block">
            <a className="result-title">Google search result 2</a>
            <div className="result-url">https://www.adexample.com › free-audit</div>
            <p className="result-description">
              Claim your free Google Ads audit now and discover how to optimize your ad campaigns for better performance and lower cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default GoogleAdMock;
