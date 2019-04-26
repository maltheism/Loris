{if $captcha_key}
<script src="https://www.google.com/recaptcha/api.js"></script>
{/if}
<div class="panel panel-default panel-center">
  <div class="panel-heading">
    <h3 class="panel-title">
        {$page_title}
    </h3>
  </div>
  <div class="panel-body">
      {if $success}
    <div class="success-message">
      <h1>Thank you!</h1>
      <p>Your request for an account has been received successfully.</p>
      <a href="/" class="btn btn-primary btn-block">
        Return to Login Page
      </a>
    </div>
      {else}
    <p class="text-center">
      Please fill in the form below to request a LORIS account.<br/>
      We will contact you once your account has been approved.
    </p>
    <form method="POST" name="form1" id="form1">
      <div class="form-group">
          {$form.firstname.html}
          {if $form.firstname.error}
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$form.firstname.error}</b>
            </span>
          {/if}
      </div>
      <div class="form-group">
          {$form.lastname.html}
          {if $form.lastname.error}
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$form.lastname.error}</b>
            </span>
          {/if}
      </div>
      <div class="form-group">
          {$form.from.html}
          {if $form.from.error}
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$form.from.error}</b>
            </span>
          {/if}
      </div>
      <div class="form-group">
          {$form.site.html}
          {if $form.site.error}
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$form.site.error}</b>
            </span>
          {/if}
      </div>
      <div class="form-group">
          {$form.tpaccept.html}
          {* checkbox's html method in LORISForm seems to automagically add the label *}
          {if $form.tpaccept.error}
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$form.tpaccept.error}</b>
            </span>
          {/if}
      </div>
      <div class="form-group">
          {$form.radiologist.html}
      </div>
        {if $captcha_key}
            {* Google reCaptcha *}
          <div class="form-group">
            <div class="g-recaptcha" data-sitekey="{$captcha_key}"></div>
            <span id="helpBlock" class="help-block">
              <b class="text-danger">{$error_message['captcha']}</b>
            </span>
          </div>
        {/if}
      <div class="form-group">
        <input type="submit" name="Submit" class="btn btn-primary btn-block"
               value="Request Account"/>
      </div>
      <div class="form-group">
        <a href="/">Back to login page</a>
      </div>
        {/if}
  </div>
</div>

<div class="modal fade" id="tModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="border-radius: 7px">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h3 class="modal-title" id="myModalLabel">Terms</h3>
            </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-12 form-group">
<table border="1">
  <tr>
    <td><b>Publication</b></td>
    <td><b>To cite any Resource used for publication in accordance with the CONP Publication Policy as well as the Resource's publication policy (found on the <u>Resource landing page</u>),</b></td>
  </tr>
  <tr>
    <td>Ownership</td>
    <td>To respect any licensing terms associated with Resources (found on the <u>Resource landing page</u>),</td>
  </tr>
  <tr>
    <td>Commercialization</td>
    <td>Not to attempt to sell or claim intellectual property rights in Resources,</td>
  </tr>
</table>
<br>
<table border="1">
  <tr>
    <td><b>Privacy</b></td>
    <td><b>Not to attempt to re-identify or re-contact individual participants,</b><br><b>Not to link individual-level datasets in a way that increases risk of re-identification,</b></td>
  </tr>
  <tr>
    <td>Ethical Oversight</td>
    <td>To obtain any required approvals for their use of Resources,</td>
  </tr>
  <tr>
    <td>Use Restrictions</td>
    <td>To respect any use restrictions (found on the <u>Resource landing page</u>),</td>
  </tr>
  <tr>
    <td>Confidentiality/Security</td>
    <td>To keep access-restricted Resources confidential.<br>To return or destroy access-restricted Resources if their authorization expires or is terminated.</td>
  </tr>
  <tr>
    <td>Monitoring</td>
    <td>To respond promptly to requests from the CONP concerning their user of the CONP Portal, and <br>To immediately report any Resource or User activity that breaches these terms to the CONP.</td>
  </tr>
</table>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>

<div class="modal fade" id="pModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="border-radius: 7px">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h3 class="modal-title" id="myModalLabel">Publication Policy</h3>
            </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-12 form-group">
<div class="policy">
  <ul>
   <li> If I publish abstracts using data from PREVENT-AD, I agree to the following:</li>
  </ul>
  <i>"I will cite PREVENT-AD as the source of data in the abstract if space allows"</i>
  <p></p>
  <ul> 
    <li>If I publish manuscripts using data from PREVENT-AD, I agree to the following:</li> 
  </ul>  
  <i>"I will state the source of data and cite the primary publication of PREVENT-AD in the methods section of my manuscripts by including language similar to the following: 'Data used in preparation of this article were obtained from the Pre-symptomatic Evaluation of Novel or Experimental Treatments for Alzheimer's Disease (PREVENT-AD) program. (Breitner et al., 2016)'."</i>
</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
