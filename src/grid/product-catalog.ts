import { loadCultureFiles } from '../common/culture-loader';
import {
    Grid,
    Sort,
    Filter,
    DetailRow,
    FilterSettingsModel,
    QueryCellInfoEventArgs
} from '@syncfusion/ej2-grids';

import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { Rating } from '@syncfusion/ej2-inputs';
import { productDetail } from './data-source';

Grid.Inject(Sort, Filter, DetailRow);
(window as any).default = (): void => {
    loadCultureFiles();
    const detailTemplate = (props: any) => {
        let discount = Math.round(
            ((props.OriginalPrice - props.Price) / props.OriginalPrice) * 100
        );
        let highlights = (props.Highlights || [])
            .map(function (item: any) {
                return '<li><span class="bullet"></span>' + item + '</li>';
            })
            .join('');

        let specifications = Object.keys(props.Specifications || {})
            .map(function (key) {
                return (
                    '<div class="info-row"><span class="spec-title">' +
                    key +
                    '</span><span class="spec">' +
                    String(props.Specifications[key]) +
                    '</span></div>'
                );
            })
            .join('');

        return `<div class="detail-page">
    <div class="detail-top">
        <div class="product-detail-wrapper">
            <div class="detail-grid">
                <div class="e-card">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-title">Product Description</div>
                        </div>
                    </div>
                    <div class="e-card-content">
                        <div class="product-description-text"> ${props.ProductDescription
            } </div>
                        <h4 class="sub-title">Key Highlights</h4>
                        <ul class="highlight-list">${highlights}</ul>
                    </div>
                </div>
                <div class="e-card">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-title">Technical Specifications</div>
                        </div>
                    </div>
                    <div class="e-card-content"> ${specifications}</div>
                </div>
                <div class="e-card">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-title">Pricing Details</div>
                        </div>
                    </div>
                    <div class="e-card-content">
                        <div class="info-row">
                            <span>Current Price</span><span class="current-price">$ ${props.Price.toLocaleString()}</span>
                        </div>
                        <div class="info-row">
                            <span>Original Price</span><span class="original-price">$ ${props.OriginalPrice.toLocaleString()}</span>
                        </div>
                        <div class="info-row"><span>Discount</span><span class="discount-price">${discount}%</span>
                        </div>
                        <div class="info-row">
                            <span>Cost Price</span><span class="cost-price">$ ${props.CostPrice.toLocaleString()}</span>
                        </div>
                        <div class="info-row">
                            <span>Profit Margin</span><span class="profit-price">${props.ProfitMargin
            } </span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    };

    const productColumnTemplate = function (props: any) {
        return (
            '<div class="product-cell"><img src="src/grid/images/products/' +
            props.ProductName +
            '.png" alt="' +
            props.ProductName +
            '" class="product-image" /><div class="product-copy"><div class="product-name">' +
            props.ProductName +
            '</div><div class="product-meta"><span class="product-description">' +
            props.Description +
            '</span><span class="product-sku">SKU: ' +
            props.SKU +
            '</span></div></div></div>'
        );
    };

    const salesColumnTemplate = function (props: any) {
        var trend =
            ((props.SalesMonth3 - props.SalesMonth2) / Math.max(props.SalesMonth2, 1)) *
            100;
        return (
            '<div class="sales-cell"><div class="sales-number">' +
            props.SalesMonth3 +
            '</div><div class="sales-growth ' +
            (trend >= 0 ? 'positive' : 'negative') +
            '">' +
            (trend >= 0 ? '↑' : '↓') +
            ' ' +
            Math.abs(trend).toFixed(1) +
            '%</div></div>'
        );
    };

    const statusColumnTemplate = function (props: any) {
        return (
            '<div class="status-cell"><span class="status-badge ' +
            (props.Status === 'In Stock'
                ? 'status-badge-success'
                : 'status-badge-error') +
            '">' +
            props.Status +
            '</span><div class="status-units">' +
            props.Units +
            ' units</div></div>'
        );
    };

    const grid = new Grid({
        dataSource: productDetail,
        height: 520,
        detailTemplate: detailTemplate,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        columns: [
            {
                field: 'ProductID',
                headerText: 'ID',
                width: 110,
                type: 'number',
                isPrimaryKey: true,
                textAlign: 'Left',
            },
            {
                field: 'ProductName',
                headerText: 'Product',
                width: 150,
                textAlign: 'Center',
                template: productColumnTemplate,
            },
            {
                field: 'Category',
                headerText: 'Category',
                width: 110,
                textAlign: 'Center',
            },
            {
                headerText: 'Sales',
                textAlign: 'Center',
                width: 90,
                template: salesColumnTemplate,
            },
            {
                field: 'Price',
                headerText: 'Price',
                width: 80,
                textAlign: 'Right',
                format: 'C2',
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: 120,
                textAlign: 'Center',
                template: statusColumnTemplate,
            }
        ]
    });

    grid.appendTo('#Detail-Grid');
};