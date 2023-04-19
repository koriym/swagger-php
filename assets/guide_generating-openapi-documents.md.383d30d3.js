import{_ as a,c as n,o as s,a as e}from"./app.ce5166e3.js";const m='{"title":"Generating OpenAPI documents","description":"","frontmatter":{},"headers":[{"level":2,"title":"./bin/openapi","slug":"bin-openapi"},{"level":2,"title":"Using PHP","slug":"using-php"}],"relativePath":"guide/generating-openapi-documents.md"}',t={},p=e(`<h1 id="generating-openapi-documents" tabindex="-1">Generating OpenAPI documents <a class="header-anchor" href="#generating-openapi-documents" aria-hidden="true">#</a></h1><h2 id="bin-openapi" tabindex="-1"><code>./bin/openapi</code> <a class="header-anchor" href="#bin-openapi" aria-hidden="true">#</a></h2><p><code>swagger-php</code> includes a command line tool <code>./bin/openapi</code>. This can be used to generate OpenAPI documents.</p><div class="language-shell"><pre><code><span class="token operator">&gt;</span> ./vendor/bin/openapi app <span class="token parameter variable">-o</span> openapi.yaml
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">Output Format</p><p>By default the output format is YAML. If a filename is given (via <code>--output</code> or <code>-o</code>) the tool will use the file extension to determine the format.</p><p>The <code>--format</code> option can be used to force a specific format.</p></div><p>For a list of all available options use the <code>-h</code> option</p><div class="language-shell"><pre><code><span class="token operator">&gt;</span> ./bin/openapi <span class="token parameter variable">-h</span>

Usage: openapi <span class="token punctuation">[</span>--option value<span class="token punctuation">]</span> <span class="token punctuation">[</span>/path/to/project <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Options:
  <span class="token parameter variable">--config</span> <span class="token punctuation">(</span>-c<span class="token punctuation">)</span>     Generator config
                    ex: <span class="token parameter variable">-c</span> <span class="token assign-left variable">operationId.hash</span><span class="token operator">=</span>false
  <span class="token parameter variable">--legacy</span> <span class="token punctuation">(</span>-l<span class="token punctuation">)</span>     Use legacy TokenAnalyser<span class="token punctuation">;</span> default is the new ReflectionAnalyser
  <span class="token parameter variable">--output</span> <span class="token punctuation">(</span>-o<span class="token punctuation">)</span>     Path to store the generated documentation.
                    ex: <span class="token parameter variable">--output</span> openapi.yaml
  <span class="token parameter variable">--exclude</span> <span class="token punctuation">(</span>-e<span class="token punctuation">)</span>    Exclude path<span class="token punctuation">(</span>s<span class="token punctuation">)</span>.
                    ex: <span class="token parameter variable">--exclude</span> vendor,library/Zend
  <span class="token parameter variable">--pattern</span> <span class="token punctuation">(</span>-n<span class="token punctuation">)</span>    Pattern of files to scan.
                    ex: <span class="token parameter variable">--pattern</span> <span class="token string">&quot;*.php&quot;</span> or <span class="token parameter variable">--pattern</span> <span class="token string">&quot;/\\.(phps|php)$/&quot;</span>
  <span class="token parameter variable">--bootstrap</span> <span class="token punctuation">(</span>-b<span class="token punctuation">)</span>  Bootstrap a php <span class="token function">file</span> <span class="token keyword">for</span> defining constants, etc.
                    ex: <span class="token parameter variable">--bootstrap</span> config/constants.php
  <span class="token parameter variable">--processor</span> <span class="token punctuation">(</span>-p<span class="token punctuation">)</span>  Register an additional processor.
  <span class="token parameter variable">--format</span> <span class="token punctuation">(</span>-f<span class="token punctuation">)</span>     Force yaml or json.
  <span class="token parameter variable">--debug</span> <span class="token punctuation">(</span>-d<span class="token punctuation">)</span>      Show additional error information.
  <span class="token parameter variable">--version</span>         The OpenAPI version<span class="token punctuation">;</span> defaults to <span class="token number">3.0</span>.0.
  <span class="token parameter variable">--help</span> <span class="token punctuation">(</span>-h<span class="token punctuation">)</span>       Display this <span class="token builtin class-name">help</span> message.
</code></pre></div><h2 id="using-php" tabindex="-1">Using PHP <a class="header-anchor" href="#using-php" aria-hidden="true">#</a></h2><p>Depending on your use case PHP code can also be used to generate OpenAPI documents in a more dynamic way.</p><p>In its simplest form this may look something like</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;vendor/autoload.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$openapi</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>OpenApi<span class="token punctuation">\\</span>Generator</span><span class="token operator">::</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;/path/to/project&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: application/x-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$openapi</span><span class="token operator">-&gt;</span><span class="token function">toYaml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Programming API</p><p>Details about the <code>swagger-php</code> API can be found in the <a href="./../reference/">reference</a>.</p></div>`,12),o=[p];function c(i,l,r,u,d,k){return s(),n("div",null,o)}var g=a(t,[["render",c]]);export{m as __pageData,g as default};
