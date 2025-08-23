<?php
if (!defined('ABSPATH')) { exit; }

// Settings page
add_action('admin_menu', function() {
  add_options_page(
    'MMAS Catalog', 'MMAS Catalog', 'manage_options', 'mmas-catalog', 'mmas_settings_page'
  );
});

add_action('admin_init', function() {
  register_setting('mmas_catalog_group', 'mmas_catalog_options', [
    'type' => 'array',
    'sanitize_callback' => function() {
       = is_array() ?  : [];
      ['whatsapp_number'] = isset(['whatsapp_number']) ? sanitize_text_field(['whatsapp_number']) : '';
      return ;
    }
  ]);
});

function mmas_settings_page() {
  if ( ! current_user_can( 'manage_options' ) ) {
    return;
  }

  // Load saved options into a local variable
  $opts = mmas_get_options();
  ?>
  <div class="wrap">
    <h1>MMAS Catalog Settings</h1>
    <form method="post" action="options.php">
      <?php settings_fields( 'mmas_catalog_group' ); ?>
      <table class="form-table" role="presentation">
        <tr>
          <th scope="row">
            <label for="mmas_catalog_options_whatsapp_number">
              Default WhatsApp Number
            </label>
          </th>
          <td>
            <input
              name="mmas_catalog_options[whatsapp_number]"
              id="mmas_catalog_options_whatsapp_number"
              type="text"
              value="<?php echo esc_attr( $opts['whatsapp_number'] ?? '' ); ?>"
              class="regular-text"
            />
            <p class="description">
              Used if a product does not specify its own number. Format: +254722308698
            </p>
          </td>
        </tr>
      </table>
      <?php submit_button(); ?>
    </form>
  </div>
  <?php
}
  <?php
}
?>
