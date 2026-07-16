# White Ceramic Engineering style pack

This pack provides an editable control-system visual language without adding a
custom renderer or changing draw.io's global default styles.

## Runtime files

- src/main/webapp/libraries/white-ceramic-engineering.mxlibrary contains the
  draggable process blocks, logic gate, ownership arbiter, atomic transition,
  summing points, connectors, junction and complete loop.
- src/main/webapp/js/PreConfig.js registers the library in the default sidebar
  set and adds the ceramic colour tokens.
- src/main/webapp/templates/engineering/white_ceramic_control.xml is the
  editable starter diagram.
- src/main/webapp/templates/engineering/white_ceramic_control.png is its
  template-browser thumbnail.

The library and template use full inline style strings. Diagrams keep their
appearance when copied, exported or opened without this fork.

## Style contract

| Token | Value |
| --- | --- |
| Warm white | #FDFDFC |
| Ceramic white | #FFFFFF |
| Ceramic gradient | #F7F6F3 |
| Pale gray | #E7E7E7 |
| Divider gray | #D7D7D4 |
| Ceramic border | #B8B8B5 |
| Graphite gray | #9A9A9A |
| Dark ceramic border | #7B7B78 |
| Secondary text | #777774 |
| Signal graphite | #5F5F5C |
| Near black | #1A1A1A |
| Shadow black | #000000 |
| Block radius | 8 px (absoluteArcSize=1;arcSize=16) |
| Connector | 2 px, round joins, classicThin arrow |
| Contact shadow | 18%, 0/4 px offset, 6 px blur |

## Shape semantics

The palette uses a deliberately small shape vocabulary. Shape changes encode
meaning; they are not decorative variants of the same block.

| Shape | Meaning |
| --- | --- |
| Rounded rectangle | Continuous controller, state, process or actuator block |
| Rounded hexagon | Authorization, validity or other guarded logic |
| Strong rounded rectangle (arbiter) | Frame-exclusive ownership arbitration |
| Top-wide trapezoid | Actual data multiplexer: candidate signals enter the wide side and one selected signal leaves the narrow side |
| Capsule | Atomic transition, lifecycle action or same-frame handoff |
| Circle | Summing point or signal junction only |

Keep the ceramic gradients, border strengths, typography and shadows from the
library entries when adapting these shapes. Do not use a logic shape merely to
add visual variety, and do not use a diamond unless the diagram represents a
branching flowchart decision rather than an architecture-level gate.

Classify the real inputs and outputs before choosing a shape. Authorization and
validity conditions are control inputs to an ownership arbiter; they are not
candidate data signals, so they do not make the arbiter a multiplexer. Keep all
text inside its block with explicit line breaks, adequate internal spacing and
a final-size render check; never rely on clipping or a white mask to hide text.

Use HTML italics for simple engineering variables, for example
Controller &lt;i&gt;C(s)&lt;/i&gt;. Reserve MathJax for equations that need real
mathematical layout.

## Local use

From src/main/webapp, start any static HTTP server and open the root URL:

~~~sh
python3 -m http.server 8080
~~~

The **White Ceramic Engineering** palette is available in the left sidebar.
Expand its title if the palette body is collapsed, then drag individual
components or the complete **Feedback Control Loop** onto the page. Use
**File → New**, then search for **White Ceramic**, to create the starter
template.

## Validation and preview

Run the validation and preview commands below from the repository root.

Validate the XML assets:

~~~sh
xmllint --noout \
  src/main/webapp/libraries/white-ceramic-engineering.mxlibrary \
  src/main/webapp/templates/engineering/white_ceramic_control.xml \
  src/main/webapp/templates/index.xml
~~~

Regenerate the thumbnail from the maintained SVG source:

~~~sh
google-chrome --headless --no-sandbox --disable-gpu --hide-scrollbars \
  --screenshot=src/main/webapp/templates/engineering/white_ceramic_control.png \
  --window-size=140,84 "file://$PWD/etc/white-ceramic/preview.svg"
~~~

If the library grows substantially, split it into multiple libs entries in
PreConfig.js instead of adding a custom stencil renderer prematurely.

## Public deployment

`.github/workflows/pages.yml` publishes `src/main/webapp` as a static GitHub
Pages artifact. It deliberately excludes `WEB-INF/` and `META-INF/`: servlet
containers hide those directories, but a generic static host would expose
their server-only configuration and Java archives as ordinary files.

The workflow deploys pushes from `dev`. A custom domain must be set in the
repository Pages settings or Pages API and in DNS; adding a `CNAME` file to an
Actions artifact does not configure the domain by itself.
