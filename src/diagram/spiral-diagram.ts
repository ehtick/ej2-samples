import { loadCultureFiles } from '../common/culture-loader';
/**
 * Spiral Diagram
 */

import {
  Diagram, NodeModel, ConnectorModel, SnapConstraints, PointModel, NodeConstraints, DiagramTools
} from '@syncfusion/ej2-diagrams';

(window as any).default = (): void => {
  loadCultureFiles();

const lifecycleSteps: Lifecycle[] = [
  { title: 'Lifecycle \nof \nSoftware ', color: 'hsl(0, 0%, 20%)' },
  { title: 'Ideation', color: 'hsl(10, 80%, 60%)', icon: 'sf-icon-ideation' },
  { title: 'Planning', color: 'hsl(20, 80%, 60%)', icon: 'sf-icon-planning' },
  { title: 'Requirement Analysis', color: 'hsl(30, 80%, 60%)', icon: 'sf-icon-requirement-analysis' },
  { title: 'Research', color: 'hsl(40, 80%, 60%)', icon: 'sf-icon-research' },
  { title: 'Design', color: 'hsl(50, 75%, 62%)', icon: 'sf-icon-design' },
  { title: 'Prototyping', color: 'hsl(60, 75%, 62%)', icon: 'sf-icon-prototyping' },
  { title: 'Frontend Development', color: 'hsl(140, 70%, 55%)', icon: 'sf-icon-front-end-development' },
  { title: 'Backend Development', color: 'hsl(150, 70%, 55%)', icon: 'sf-icon-backend-development' },
  { title: 'Integration', color: 'hsl(160, 70%, 55%)', icon: 'sf-icon-integration' },
  { title: 'Testing', color: 'hsl(180, 65%, 60%)', icon: 'sf-icon-testing' },
  { title: 'Bug Fixing', color: 'hsl(190, 65%, 60%)', icon: 'sf-icon-bug-fixing' },
  { title: 'Deployment', color: 'hsl(210, 70%, 60%)', icon: 'sf-icon-deployment' },
  { title: 'User Training', color: 'hsl(220, 70%, 60%)', icon: 'sf-icon-user-training' },
  { title: 'Monitoring', color: 'hsl(240, 70%, 65%)', icon: 'sf-icon-monitoring' },
  { title: 'Feedback Collection', color: 'hsl(250, 70%, 65%)', icon: 'sf-icon-feedback' },
  { title: 'Iteration', color: 'hsl(260, 70%, 65%)', icon: 'sf-icon-iteration' },
  { title: 'Scalability Improvements', color: 'hsl(280, 70%, 60%)', icon: 'sf-icon-scalability-improvements' },
  { title: 'Security Audit', color: 'hsl(290, 70%, 60%)', icon: 'sf-icon-security-audit' },
  { title: 'Performance Tuning', color: 'hsl(300, 70%, 60%)', icon: 'sf-icon-performance-tuning' },
  { title: 'Documentation', color: 'hsl(320, 60%, 65%)', icon: 'sf-icon-documentation' },
  { title: 'Customer Support', color: 'hsl(330, 60%, 65%)', icon: 'sf-icon-customer-support' },
  { title: 'Feature Expansion', color: 'hsl(345, 60%, 60%)', icon: 'sf-icon-feature-expansion' },
  { title: 'Sales & Marketing', color: 'hsl(355, 60%, 60%)', icon: 'sf-icon-sales-marketing' },
  { title: 'Partnerships', color: 'hsl(5, 60%, 60%)', icon: 'sf-icon-partnership' },
  { title: 'End-of-Life Plan', color: 'hsl(15, 60%, 60%)', icon: 'sf-icon-end-plan' }
];

// Diagram variables and constants
const nodes: NodeModel[] = [];
const connectors: ConnectorModel[] = [];
const centerX: number = 500, centerY: number = 500;
const angle: number = 180, angleStep: number = 30;
const radius: number = 200, radiusStep: number = 65;

// Convert polar to Cartesian coordinates
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): PointModel {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

// Spiral layout creation
function createSpiralDiagram(): void {
  nodes.push({
    id: 'node0',
    offsetX: centerX + 30,
    offsetY: centerY,
    width: 150,
    height: 150,
    shape: { type: 'Basic', shape: 'Ellipse' },
    constraints: NodeConstraints.Default | NodeConstraints.Shadow,
    annotations: [{
      width: 100,
      content: lifecycleSteps[0].title,
      style: { color: '#FFFFFF', fontSize: 18, bold: true }
    }
    ],
    style: {
      fill: lifecycleSteps[0].color,
      strokeColor: 'white',
      strokeWidth: 2,
    }
  });

  for (let i = 1; i < lifecycleSteps.length; i++) {
    const step: Lifecycle = lifecycleSteps[i];
    const point = polarToCartesian(centerX, centerY, radius + (i * radiusStep / (2 * Math.PI)), angle + (i * angleStep));

    nodes.push({
      id: `node${i}`,
      offsetX: point.x,
      offsetY: point.y,
      width: 85,
      height: 85,
      constraints: NodeConstraints.Default | NodeConstraints.Shadow | NodeConstraints.Tooltip,
      tooltip: { content: step.title, relativeMode: 'Object' },
      annotations: [{
        width: 50, height: 50,
        template: `<div class="${step.icon}" style="text-align: center;"></div>`
      }],
      shape: { type: 'Basic', shape: 'Ellipse' },
      style: {
        fill: step.color,
        strokeColor: '#FFFFFF',
        strokeWidth: 2,
      }
    });

    if (i !== 1) {
      connectors.push({
        id: `connector${i}`,
        sourceID: `node${i - 1}`,
        targetID: `node${i}`,
        type: 'Straight',
        style: {
          strokeColor: '#9CA3AF',
          strokeWidth: 2,
        },
        targetDecorator: {
          shape: 'Arrow',
          style: {
            fill: '#9CA3AF',
            strokeColor: '#9CA3AF'
          }
        }
      });
    }
  }
}

createSpiralDiagram();
let diagramCreated: boolean = false;
//Initialize diagram control
let diagram: Diagram = new Diagram({
  width: '100%', height: '730px', snapSettings: { constraints: SnapConstraints.None },
  nodes: nodes, connectors: connectors, tool: DiagramTools.ZoomPan,
  created: () => {
    diagramCreated = true;
    diagram.fitToPage();
  },
  load: () => {
    if (diagramCreated) {
      setTimeout(() => diagram.fitToPage(), 10);
    }
  }
});
diagram.appendTo('#diagram');
};

// Life cycle data
interface Lifecycle {
  title: string;
  color: string;
  icon?: string;
}