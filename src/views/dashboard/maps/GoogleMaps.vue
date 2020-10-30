<template>
  <v-container
    id="google-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
          color="success"
          title="Letak Geografis"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31562.126749783994!2d116.06903131571505!3d-8.570417055739497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0604d476ac7%3A0xc861ca25c0b94697!2sKec.%20Ampenan%2C%20Kota%20Mataram%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1601972922971!5m2!1sid!2sid"
                width="600"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="success"
          title="Satellite Map"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="success"
          title="Custom Skin & Settings Map"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
              />
            </v-sheet>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
